import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: 600px;
  padding: 1rem;
  border: 5px solid #16a085;
`;
const Root = styled.div`
  width: 450px;
  height: 550px;
  padding: 1rem;
  border: 5px solid #16a085;
`;
const AddContainer = styled.div`
  width: 400px;
  height: 200px;
  padding: 1rem;
  margin: 1rem auto;
  border: 5px solid #16a085;
`;
const AddButtonContainer = styled.div`
  width: 350px;
  height: 100px;
  padding: 1rem;
  margin: 1rem auto;
  border: 5px solid #16a085;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 0.5rem 0.5rem 0;
`;
const DisplayContainer = styled.div`
  width: 400px;
  height: 200px;
  padding: 1rem;
  margin: 2rem auto;
  border: 5px solid #16a085;
`;
const DisplayNumberContainer = styled.div`
  width: 350px;
  height: 110px;
  padding: 1rem;
  margin: 1rem auto;
  border: 5px solid #16a085;
`;
const Display = styled.div`
  width: 300px;
  height: 35px;
  border: 2px solid #16a085;
  margin: 0.5rem auto;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;
const Button = styled.button`
  all: unset;
  width: 20px;
  height: 20px;
  border: 1px solid #16a085;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:active {
    transform: scale(1.4);
  }
`;
const Input = styled.input`
  border: 1px solid #16a085;
  margin-left: 0.5rem;
  padding-left: 0.5rem;
  color: #16a085;
  font-size: 1rem;
  outline: none;
  font-size: 1.5rem;
`;

function Counter() {
  const [value, setValue] = useState("0");
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    setCount(count + parseInt(value, 10));
  };

  return (
    <Wrapper>
      <Root>
        Root
        <AddContainer>
          Add Number ROOT
          <AddButtonContainer>
            Add Number
            <ButtonContainer>
              <Button onClick={handleClick}>✚</Button>
              <Input type="number" value={value} onChange={handleChange} />
            </ButtonContainer>
          </AddButtonContainer>
        </AddContainer>
        <DisplayContainer>
          Display Number ROOT
          <DisplayNumberContainer>
            Display Number
            <Display>{count}</Display>
          </DisplayNumberContainer>
        </DisplayContainer>
      </Root>
    </Wrapper>
  );
}

export default Counter;
