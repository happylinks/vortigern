import { fork } from 'redux-saga/effects';

import { loginSaga } from './login';
import { logoutSaga } from './logout';

export default function* authSaga() {
  yield [
    fork(loginSaga),
    fork(logoutSaga),
  ];
}
