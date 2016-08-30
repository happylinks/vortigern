import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');
const reduxConnect = require('redux-connect');
const connectReducer = reduxConnect.reducer;

import { modalReducer } from './modal';
import { githubGistsReducer } from './github/gists';
import { githubStarsReducer } from './github/stars';
import { starwarsFilmsReducer } from './starwars/films';
import { counterReducer } from './counter';
import { authLoginReducer } from './auth/login';
import { sessionReducer } from './session';

import {
  model as authLogin,
  form as authLoginForm,
} from './forms/auth/login';

const rootReducer = combineReducers({
  routing: routerReducer,
  reduxAsyncConnect: connectReducer,

  counter: counterReducer,
  modal: modalReducer,
  session: sessionReducer,

  githubGists: githubGistsReducer,
  githubStars: githubStarsReducer,
  starwarsFilms: starwarsFilmsReducer,
  authLogin: authLoginReducer,

  forms: combineReducers({
    authLogin,
    authLoginForm,
  }),
});

export default rootReducer;
