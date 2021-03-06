import React from 'react';
import styled from 'styled-components';
import AddNumberRoot from './presenter/AddNumberRoot';
import DisplayNumberRoot from './presenter/DisplayNumberRoot';

const Container = styled.div`
  width: 50%;
  margin: auto;
  padding: 20px;
  border: 5px solid dodgerblue;
`;

function AddApp() {
  return (
    <Container>
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayNumberRoot />
    </Container>
  );
}

export default AddApp;
