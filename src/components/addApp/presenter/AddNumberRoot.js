import React from 'react';
import styled from 'styled-components';
import AddNumberContainer from '../container/AddNumberContainer';

const AddContainer = styled.div`
  border: 5px solid dodgerblue;
  padding: 20px;
  margin: 10px 0;
`;

function AddNumberRoot() {
  return (
    <AddContainer>
      <h1>Add Number ROOT</h1>
      <AddNumberContainer />
    </AddContainer>
  );
}

export default AddNumberRoot;
