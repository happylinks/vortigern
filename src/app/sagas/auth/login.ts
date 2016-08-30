import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
const { browserHistory } = require('react-router');

import * as actions from '../../actions/auth/login';
import { updateSession } from '../../actions/session';
import { post } from '../../helpers/handleRequest';

function setToken(token) {
  localStorage.setItem('token', token);
}

export function* login(action?: any): IterableIterator<any> {
  try {
    const res = yield call(post, '/api/login', action.payload);
    yield put(actions.loginSuccess(res));
    yield put(updateSession(res));
    yield call(setToken, res.token);
    yield call(browserHistory.push, '/');
  } catch (e) {
    throw e;
    // yield put(actions.loginFailure(e.response ? e.response.message : null));
  }
}

export function* loginSaga() {
  yield* takeEvery(actions.LOGIN_REQUEST, login);
}
