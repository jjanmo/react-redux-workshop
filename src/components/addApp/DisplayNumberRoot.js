import React from "react";
import styled from "styled-components";
import DisplayNumber from "./DisplayNumber";

const Container = styled.div`
  border: 5px solid dodgerblue;
  padding: 20px;
  margin: 10px 0;
`;

function DisplayNumberRoot({ number }) {
  return (
    <Container>
      <h1> Display Number ROOT</h1>
      <DisplayNumber number={number} />
    </Container>
  );
}

export default DisplayNumberRoot;
