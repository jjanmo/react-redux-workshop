import React from 'react';
import { connect } from 'react-redux';
import DisplayNumber from '../presenter/DisplayNumber';

function DisplayNumberContainer({ number }) {
  return <DisplayNumber number={number} />;
}

const mapStateToProps = (state) => {
  return { number: state.addApp.number };
};
export default connect(mapStateToProps)(DisplayNumberContainer);
