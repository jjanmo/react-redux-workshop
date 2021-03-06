import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  margin: 10px 0;
  border: 5px solid dodgerblue;
`;
const Display = styled.div`
  padding: 10px;
  margin: 10px 0;
  border: 3px solid dodgerblue;
  font-size: 1.5rem;
`;

function DisplayNumber({ number }) {
  return (
    <Container>
      <h1>Display Number</h1>
      <Display>{number}</Display>
    </Container>
  );
}

export default DisplayNumber;
