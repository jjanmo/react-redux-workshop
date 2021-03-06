//initial state
const initialState = {
  input: 0,
  number: 0,
};

//action type
const CHANGE = 'addApp/CHANGE';
const ADD = 'addApp/ADD';

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
export default function addAppReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE: {
      return {
        ...state,
        input: action.input || 0,
      };
    }
    case ADD: {
      return {
        ...state,
        number: state.input + state.number,
      };
    }
    default:
      return state;
  }
}
