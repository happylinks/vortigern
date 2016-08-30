const appConfig = require('../../config/main');
import { createStore, applyMiddleware, compose } from 'redux';
const { routerMiddleware } = require('react-router-redux');
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from './reducers';
const createLogger = require('redux-logger');

export function configureStore(history, initialState?: any) {

  const sagaMiddleware = createSagaMiddleware();

  let middlewares: any[] = [
    routerMiddleware(history),
    sagaMiddleware,
  ];

  /** Add Only Dev. Middlewares */
  if (appConfig.env !== 'production' && process.env.BROWSER) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const finalCreateStore = compose(
    applyMiddleware(...middlewares),
    appConfig.env === 'development' &&
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension() : f => f
  )(createStore);

  const store: any = finalCreateStore(rootReducer, initialState);

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  if (appConfig.env === 'development' && (module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      store.replaceReducer((require('./reducers')));
    });
  }

  return store;
}
