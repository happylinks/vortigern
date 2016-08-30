import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
const { browserHistory } = require('react-router');

import * as actions from '../../actions/auth/logout';
import { updateSession } from '../../actions/session';
import { post } from '../../helpers/handleRequest';

export function* logout(): IterableIterator<any> {
  try {
    yield call(post, '/api/logout');
    yield put(actions.logoutSuccess());
    yield put(updateSession({}));
    yield call(browserHistory.push, '/login');
  } catch (e) {
    yield put(actions.logoutFailure(e.response ? e.response.message : null));
  }
}

export function* logoutSaga() {
  yield* takeEvery(actions.LOGOUT_REQUEST, logout);
}
