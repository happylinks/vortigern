import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import { modelReducer, formReducer } from 'react-redux-form';
const reduxConnect = require('redux-connect');
const connectReducer = reduxConnect.reducer;
// import { starsReducer } from './modules/stars/stars';
// import { counterReducer } from './modules/counter/counter';
// import { authReducer } from './modules/auth/auth';

import { githubGistsReducer } from './github/gists';
import { githubStarsReducer } from './github/stars';
import { counterReducer } from './counter';

// const initialUserState = {
//   email: '',
//   password: '',
// };

const rootReducer: Redux.Reducer = combineReducers({
  routing: routerReducer,
  reduxAsyncConnect: connectReducer,
  githubGists: githubGistsReducer,
  githubStars: githubStarsReducer,
  counter: counterReducer,
  // stars: starsReducer,
  // counter: counterReducer,
  // auth: authReducer,
  // session: modelReducer('session', initialUserState),
  // loginForm: formReducer('login', initialUserState),
});

export default rootReducer;
