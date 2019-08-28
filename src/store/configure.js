import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';

import modules from './modules';
import { rootSaga } from './sagas';

const configure = () => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(modules, devTools, applyMiddleware(logger, thunk, sagaMiddleware));
  return store;
}

export default configure;
