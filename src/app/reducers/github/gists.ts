import {
  GITHUB_GISTS_REQUEST,
  GITHUB_GISTS_SUCCESS,
  GITHUB_GISTS_FAILURE,
} from '../../actions/github/gists';

const initialState = {
  isFetching: false,
};

export function githubGistsReducer(state = initialState, action) {
  switch (action.type) {
    case GITHUB_GISTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case GITHUB_GISTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        gists: action.gists,
      });

    case GITHUB_GISTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        message: action.message,
      });

    default:
      return state;
  }
}
