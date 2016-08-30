import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { handleRequest } from '../../helpers/handleRequest';
import * as actions from '../../actions/github/gists';

export function* getGithubGists(action?: any): IterableIterator<any> {
  try {
    const res = yield call(handleRequest, `https://api.github.com/users/${action.payload.username}/gists`);
    yield put(actions.githubGistsSuccess(res || []));
  } catch (e) {
    yield put(actions.githubGistsFailure(e.response ? e.response.message : null));
  }
}

export function* githubGistsSaga() {
  yield* takeEvery(actions.GITHUB_GISTS_REQUEST, getGithubGists);
}
