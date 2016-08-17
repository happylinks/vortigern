import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { handleGraphQLRequest } from '../../helpers/handleGraphQLRequest';
import * as actions from '../../actions/starwars/films';

export function* getStarwarsFilms(options?: any): IterableIterator<any> {
  try {
    const res = yield call(handleGraphQLRequest, `{
      allFilms {
        films {
          title,
          created,
          releaseDate,
          openingCrawl
        }
      }
    }`);
    yield put(actions.starwarsFilmsSuccess(res.allFilms.films || []));
  } catch (e) {
    console.error(e);
    yield put(actions.starwarsFilmsFailure(e));
  }
}

export function* starwarsFilmsSaga() {
  yield* takeEvery(actions.STARWARS_FILMS_REQUEST, getStarwarsFilms);
}
