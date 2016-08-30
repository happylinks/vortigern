import 'isomorphic-fetch';
import './style';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
const { browserHistory } = require('react-router');
const { syncHistoryWithStore } = require('react-router-redux');

import { configureStore } from './app/store';
import routes from './app/routes';
import rootSaga from './app/sagas';
import { Root } from './app/components';
// import { loginRequest } from './app/actions/auth/login';

const store: any = configureStore(
  browserHistory,
  window.__INITIAL_STATE__
);
const history = syncHistoryWithStore(browserHistory, store);

store.runSaga(rootSaga);

// const jwt = localStorage.getItem('token');
// if (jwt) {
//   store.dispatch(loginRequest({ jwt }));
// }

ReactDOM.render(
  <Root
    store={store}
    routes={routes}
    history={history}
    type="client"
  />,
  document.getElementById('app')
);
