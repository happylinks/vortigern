import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { handleRequest } from '../../helpers/handleRequest';
import * as actions from '../../actions/github/stars';

export function* getGithubStars(options?: any): IterableIterator<any> {
  try {
    const res = yield call(handleRequest, `https://api.github.com/repos/${options.repo}`);
    yield put(actions.githubStarsSuccess(res ? res.stargazers_count : 0));
  } catch (e) {
    yield put(actions.githubStarsFailure(e));
  }
}

export function* githubStarsSaga() {
  yield* takeEvery(actions.GITHUB_STARS_REQUEST, getGithubStars);
}
