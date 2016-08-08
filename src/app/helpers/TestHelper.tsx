/** React Specific */
import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { handleRequest } from './handleRequest';

const fetchMock = require('fetch-mock');

/** Redux Mock Store Configuration */

const configureStore = require('redux-mock-store');
const middlewares = [];
const mockStore = configureStore(middlewares);

/** Render Component */
function renderComponent(ComponentClass, state?, props?) {
  const store: Redux.Store = createStore(rootReducer, state);

  return mount (
    <Provider store={store}>
      <ComponentClass {...props} />
    </Provider>
  );
}

export { mockStore, fetchMock, renderComponent, handleRequest };
