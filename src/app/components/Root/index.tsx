import * as React from 'react';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
const { I18nextProvider } = require('react-i18next');
const { Router, RouterContext } = require('react-router');
const { ReduxAsyncConnect } = require('redux-connect');

import i18n from '../../i18n';
import { ModalRoot } from '../../containers';

interface IProps {
  store: Redux.Store<any>;
  history: any;
  routes: any;
  type: string;
  renderProps?: any;
}

const Root = (props: IProps) => {
  const { store, history, routes, type, renderProps } = props;

  return (
    <I18nextProvider i18n={ i18n }>
      <Provider store={store}>
        <div className="rootWrapper">
          <ModalRoot />
          { type === 'server'
            ? <RouterContext {...renderProps} />
            : (
                <Router
                  history={history}
                  render={(props) =>
                    <ReduxAsyncConnect {...props} />
                  }
                >
                  {routes}
                </Router>
              )
          }
        </div>
      </Provider>
    </I18nextProvider>
  );
};

export default Root;
