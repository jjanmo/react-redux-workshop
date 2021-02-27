import React, { useState } from "react";
import styled from "styled-components";
import AddNumberRoot from "./AddNumberRoot";
import DisplayNumberRoot from "./DisplayNumberRoot";

const Container = styled.div`
  width: 50%;
  margin: auto;
  padding: 20px;
  border: 5px solid dodgerblue;
`;

function AddApp() {
  const [value, setValue] = useState("0");
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setNumber(number + parseInt(value, 10));
  };

  return (
    <Container>
      <h1>Root</h1>
      <AddNumberRoot handleChange={handleChange} handleClick={handleClick} value={value} />
      <DisplayNumberRoot number={number} />
    </Container>
  );
}

export default AddApp;
