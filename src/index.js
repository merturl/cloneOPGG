import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Root from 'Root';

ReactDOM.render(
    <Root store={store}/>,
  document.getElementById('app')
);
