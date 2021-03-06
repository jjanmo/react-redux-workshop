import React, { useState } from 'react';
import { connect } from 'react-redux';
import AddNumber from '../presenter/AddNumber';
import { actionCreator } from '../../../modules/addApp';

function AddNumberContainer({ dispatchChange, dispatchAdd }) {
  const [input, setInput] = useState('0');

  const handleChange = (e) => {
    const _input = e.target.value;

    setInput(_input);
    dispatchChange(parseInt(_input));
  };

  const handleClick = (e) => {
    dispatchAdd();
  };

  return <AddNumber handleChange={handleChange} handleClick={handleClick} input={input} />;
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatchChange: (input) => dispatch(actionCreator.change(input)),
  dispatchAdd: () => dispatch(actionCreator.add()),
});

export default connect(null, mapDispatchToProps)(AddNumberContainer);
