import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from './board.model';
//Decorator that marks a class as a provider.
//Providers can be injected into other classes
//via constructor parameter injection using
//Nest's built-in Dependency Injection (DI) system.
@Injectable()
export class BoardsService {
  //기본 저장되어 있는 Board DB 데이터를 사용하기 위한 생성자
  constructor(
    @InjectModel('Board') private readonly boardModel: Model<Board>,
  ) {}

  //전체 게시판 리스트 가져오기
  selectAllBoards() {
    const boards = this.boardModel.find();
    return boards;
  }
  //게시판 새로 등록하기
  async insertNewBoard(nwriter: string, ntitle: string, ncontents: string) {
    const newBoard = new this.boardModel({
      writer: nwriter,
      title: ntitle,
      contents: ncontents,
    });
    const result = await newBoard.save();
    return result;
  }
  //Param을 통하여 원하는 게시판 1개 Detail 가져오기
  async selectOneBoard(boardId) {
    const board = await this.boardModel.findById(boardId);
    return board;
  }
  //게시판 업데이트 기능
  async updatedBoard(boardId, newTitle, newContents) {
    const board = await this.boardModel.findById(boardId);
    if (newTitle) {
      board.title = newTitle;
    }
    if (newContents) {
      board.contents = newContents;
    }
    await board.save();
    return board;
  }
  //게시판 삭제 기능
  async deleteBoard(boardId) {
    const result = await this.boardModel.remove({ _id: boardId });
    if (result.n === 0) {
      throw new NotFoundException('게시판을 찾을 수 없습니다.');
    }
  }
}
