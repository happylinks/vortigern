import { fork } from 'redux-saga/effects';

import { githubGistsSaga } from './github/gists';
import { githubStarsSaga } from './github/stars';

export default function* root() {
  yield [
    fork(githubGistsSaga),
    fork(githubStarsSaga),
  ];
}
