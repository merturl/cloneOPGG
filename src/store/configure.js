import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';

import modules from './modules';
import { rootSaga } from './sagas';

const configure = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(modules, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));
  return store;
}

export default configure;
