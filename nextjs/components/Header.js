import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Header = styled.header`
  width: 100%;
  height: auto;
  .container {
    max-width: 1200px;
    width: 100%;
    height: auto;
    .input_box {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      > div {
        flex: 0 0 33.333%;
      }
    }
  }
`;
const Item = styled.div``;
export default () => {
  const [boards, setBoards] = useState();
  const [render, setRender] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [formData, setFormData] = useState({
    writer: '',
    title: '',
    contents: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!update) {
      const res = await axios.post('http://localhost:3000/boards', formData);
    } else {
      const res = await axios.patch(
        `http://localhost:3000/boards/${formData.id}`,
        formData,
      );
      if (res.data.message === '업데이트가 실패했습니다.') {
        alert(res.data.message);
        setUpdateData({ writer: '', title: '', contents: '' });
        return setUpdate(true);
      } else {
        setUpdateData({ writer: '', title: '', contents: '' });
        setUpdate(false);
      }
    }
    setFormData({ writer: '', title: '', contents: '' });
    setRender(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const deleteBtn = async (id) => {
    console.log(id);
    const res = await axios.delete(`http://localhost:3000/boards/${id}`);
    setRender(true);
  };
  const goToUpdate = (forUpdateData) => {
    console.log(forUpdateData);
    setUpdate(true);
    setUpdateData({
      writer: forUpdateData.writer,
      id: forUpdateData._id,
      title: forUpdateData.title,
      contents: forUpdateData.contents,
    });
  };
  useEffect(() => {
    const getAllBoards = async () => {
      const res = await axios.get('http://localhost:3000/boards');

      console.log(res.data);
      setBoards(res.data);
    };
    getAllBoards();
    setRender(false);
  }, [render]);
  useEffect(() => {
    console.log(updateData);
    setFormData({
      id: updateData.id,
      title: updateData.title,
      contents: updateData.contents,
    });
  }, [update]);
  return (
    <Header>
      <div className="container">
        <div className="input_box">
          <div className="writer_box">
            <input
              type="text"
              name="writer"
              value={update ? updateData.writer : formData.writer}
              placeholder="글쓴이"
              disabled={update ? true : false}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="title_box">
            <input
              type="text"
              name="title"
              value={formData.title}
              placeholder="제목"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="contents_box">
            <input
              type="text"
              name="contents"
              value={formData.contents}
              placeholder="내용"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            {update ? '수정' : '등록'}
          </button>
        </div>
        <div className="boards_box">
          {boards &&
            boards.length > 0 &&
            boards.map((board, i) => (
              <Item key={i}>
                {`글쓴이 : ${board.writer}, 제목 : ${board.title}, 내용 : ${board.contents}`}
                <button type="button" onClick={() => deleteBtn(board._id)}>
                  삭제
                </button>
                <button type="button" onClick={() => goToUpdate(board)}>
                  수정
                </button>
              </Item>
            ))}
        </div>
      </div>
    </Header>
  );
};
