import React from "react";
import styled from "styled-components";
import AddNumber from "./AddNumber";

const AddContainer = styled.div`
  border: 5px solid dodgerblue;
  padding: 20px;
  margin: 10px 0;
`;

function AddNumberRoot({ handleChange, handleClick, value }) {
  return (
    <AddContainer>
      <h1>Add Number ROOT</h1>
      <AddNumber handleChange={handleChange} handleClick={handleClick} value={value} />
    </AddContainer>
  );
}

export default AddNumberRoot;
