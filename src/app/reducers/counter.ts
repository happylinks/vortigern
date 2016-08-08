import {
  INCREMENT,
  DECREMENT,
  DIVIDE,
} from '../actions/counter';

const initialState = {
  count: 0,
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        count: ((state.count - 1 > 0) ? state.count - 1 : 0),
      };

    case DIVIDE:
      return {
        count: ((state.count / 2 > 0) ? state.count / 2 : 0),
      };

    default:
      return state;
  }
}
