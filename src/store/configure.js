import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import modules from './modules';


const configure = () => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const logger = createLogger();
  const store = createStore(modules, devTools, applyMiddleware(logger, thunk));
  return store;
}

export default configure;
