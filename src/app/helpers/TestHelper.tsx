import * as React from 'react';
import * as Redux from 'redux';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { handleRequest } from './handleRequest';

const fetchMock = require('fetch-mock');

const configureStore = require('redux-mock-store');
const middlewares = [];
const mockStore = configureStore(middlewares);

function renderComponent(ComponentClass, state?, props?) {
  const store: Redux.Store<any> = createStore(rootReducer, state);

  return mount (
    <Provider store={store}>
      <ComponentClass {...props} />
    </Provider>
  );
}

export { mockStore, fetchMock, renderComponent, handleRequest };
