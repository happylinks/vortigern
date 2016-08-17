import {
  STARWARS_FILMS_REQUEST,
  STARWARS_FILMS_SUCCESS,
  STARWARS_FILMS_FAILURE,
} from '../../actions/starwars/films';

const initialState = {
  isFetching: false,
};

export function starwarsFilmsReducer(state = initialState, action) {
  switch (action.type) {
    case STARWARS_FILMS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case STARWARS_FILMS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        films: action.films,
      });

    case STARWARS_FILMS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        message: action.message,
      });

    default:
      return state;
  }
}
