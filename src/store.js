import { createStore } from "redux";

function reducer(state, action) {
  if (state === undefined) {
    return {
      number: 0,
    };
  }

  switch (action.type) {
    case "change":
      return {
        number: action.number,
      };
    case "add": {
      return {
        number: state.number + action.number,
      };
    }
  }
}

const store = createStore(reducer);

export default store;
