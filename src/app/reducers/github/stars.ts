import {
  GITHUB_STARS_REQUEST,
  GITHUB_STARS_SUCCESS,
  GITHUB_STARS_FAILURE,
} from '../../actions/github/stars';

const initialState = {
  isFetching: false,
  repo: 'barbar/vortigern',
};

export function githubStarsReducer(state = initialState, action) {
  switch (action.type) {
    case GITHUB_STARS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case GITHUB_STARS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        count: action.count,
      });

    case GITHUB_STARS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        message: action.message,
      });

    default:
      return state;
  }
}
