const test = "hoi";

function* generator() {
    yield "generator";
    yield "is";
    yield "cool";
}

const gen = generator();
console.log(gen);

import 'isomorphic-fetch';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
const { Router, browserHistory } = require('react-router');
import { syncHistoryWithStore } from 'react-router-redux';
const { ReduxAsyncConnect } = require('redux-connect');
import { configureStore } from './app/redux/store';
import routes from './app/routes';

const store: Redux.Store = configureStore(
  browserHistory,
  window.__INITIAL_STATE__
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router
      history={history}
      render={(props) =>
        <ReduxAsyncConnect {...props} />
      }
    >
    {routes}
    </Router>
  </Provider>,
  document.getElementById('application')
);
