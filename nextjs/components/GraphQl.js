import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  max-widht: 100%;
`;
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`;
export default () => {
  return (
    <Main>
      <Container>
        <div className="form"></div>
      </Container>
    </Main>
  );
};
