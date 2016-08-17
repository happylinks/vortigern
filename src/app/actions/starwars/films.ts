export const STARWARS_FILMS_REQUEST: string = 'STARWARS_FILMS_REQUEST';
export const STARWARS_FILMS_SUCCESS: string = 'STARWARS_FILMS_SUCCESS';
export const STARWARS_FILMS_FAILURE: string = 'STARWARS_FILMS_FAILURE';

export function starwarsFilmsRequest(options?: any) {
  return {
    type: STARWARS_FILMS_REQUEST,
  };
}

export function starwarsFilmsSuccess(films: any) {
  return {
    type: STARWARS_FILMS_SUCCESS,
    films,
  };
}

export function starwarsFilmsFailure(message: any) {
  return {
    type: STARWARS_FILMS_FAILURE,
    message,
  };
}
