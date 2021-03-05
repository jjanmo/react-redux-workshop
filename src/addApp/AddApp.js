import React, { useState } from "react";
import styled from "styled-components";
import AddNumberRoot from "./AddNumberRoot";
import DisplayNumberRoot from "./DisplayNumberRoot";
import store from "../store";

const Container = styled.div`
  width: 50%;
  margin: auto;
  padding: 20px;
  border: 5px solid dodgerblue;
`;

function AddApp() {
  // const [value, setValue] = useState("0");
  // const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    console.log(store);
    store.dispatch({ type: "change", value: parseInt(e.target.value, 10) });
  };

  const handleClick = () => {
    // setNumber(number + parseInt(value, 10));
    store.dispatch({ type: "add" });
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
