import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../actions/auth/login';

const initialState = {
  isFetching: false,
};

export function authLoginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        user: action.payload,
      });

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        message: action.payload.message,
      });

    default:
      return state;
  }
}
