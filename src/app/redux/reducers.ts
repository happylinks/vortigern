import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
const { reducer } = require('redux-connect');
import { starsReducer } from './modules/stars/stars';
import { counterReducer } from './modules/counter/counter';

const rootReducer: Redux.Reducer = combineReducers({
  routing: routerReducer,
  reduxAsyncConnect: reducer,
  stars: starsReducer,
  counter: counterReducer,
});

export default rootReducer;
