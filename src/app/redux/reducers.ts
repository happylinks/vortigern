import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
const { reducer } = require('redux-connect');
import { starsReducer } from './modules/stars/stars';

const rootReducer: Redux.Reducer = combineReducers({
  routing: routerReducer,
  reduxAsyncConnect: reducer,
  stars: starsReducer,
});

export default rootReducer;
