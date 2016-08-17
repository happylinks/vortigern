import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../actions/modal';

const initialState = {
  type: null,
  props: {},
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        type: action.payload.type,
        props: action.payload.props,
      };

    case HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
}
