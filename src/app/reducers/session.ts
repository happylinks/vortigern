import {
  UPDATE_SESSION,
} from '../actions/session';

const initialState = {
};

export function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SESSION:
      return action.payload;

    default:
      return state;
  }
}
