import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { handleRequest } from '../../helpers/handleRequest';
import * as actions from '../../actions/github/gists';

export function* getGithubGists(options?: any): IterableIterator<any> {
  try {
    const res = yield call(handleRequest, `https://api.github.com/users/${options.username}/gists`);
    yield put(actions.githubGistsSuccess(res || []));
  } catch (e) {
    yield put(actions.githubGistsFailure(e));
  }
}

export function* githubGistsSaga() {
  yield* takeEvery(actions.GITHUB_GISTS_REQUEST, getGithubGists);
}
