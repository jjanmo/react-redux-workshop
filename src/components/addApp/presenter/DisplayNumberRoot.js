import React from 'react';
import styled from 'styled-components';
import DisplayNumberContainer from '../container/DisplayNumberContainer';

const Container = styled.div`
  border: 5px solid dodgerblue;
  padding: 20px;
  margin: 10px 0;
`;

function DisplayNumberRoot() {
  return (
    <Container>
      <h1> Display Number ROOT</h1>
      <DisplayNumberContainer />
    </Container>
  );
}

export default DisplayNumberRoot;
