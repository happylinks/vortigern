import { fork } from 'redux-saga/effects';

import { githubGistsSaga } from './github/gists';
import { githubStarsSaga } from './github/stars';
import { starwarsFilmsSaga } from './starwars/films';
import authSaga from './auth';

export default function* root() {
  yield [
    fork(githubGistsSaga),
    fork(githubStarsSaga),
    fork(starwarsFilmsSaga),
    fork(authSaga),
  ];
}
