import 'isomorphic-fetch';
import './style';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
const { Router, browserHistory } = require('react-router');
import { syncHistoryWithStore } from 'react-router-redux';
const { ReduxAsyncConnect } = require('redux-connect');
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { configureStore } from './app/store';
import routes from './app/routes';
import { ModalRoot } from './app/components/ModalRoot';

const store: Redux.Store = configureStore(
  browserHistory,
  window.__INITIAL_STATE__
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <Provider store={store} key="provider">
      <Router
        history={history}
        render={(props) =>
          <div>
            <ModalRoot />
            <ReduxAsyncConnect {...props} />
          </div>
        }
      >
      {routes}
      </Router>
    </Provider>
  </I18nextProvider>,
  document.getElementById('app')
);
