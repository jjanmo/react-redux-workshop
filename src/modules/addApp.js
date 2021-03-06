//initial state
const initialState = {
  input: '',
  number: 0,
};

//action type
const CHANGE = 'CHANGE';
const ADD = 'ADD';

// action creator
export const actionCreator = {
  change(input) {
    return {
      type: CHANGE,
      input,
    };
  },
  add() {
    return {
      type: ADD,
    };
  },
};

// reducer function
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE: {
      return {
        ...state,
        input: action.input,
      };
    }
    case ADD: {
      return {
        ...state,
        number: state.number + action.number,
      };
    }
    default:
      return state;
  }
}
