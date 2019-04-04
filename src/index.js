import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk';

import Root from 'Root';
import reducers from './reducers';


const logger = createLogger();
const store = createStore(reducers, applyMiddleware(logger, thunk));

console.log(store.getState());
ReactDOM.render(
    <Root store={store}/>,
  document.getElementById('app')
);
