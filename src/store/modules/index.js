import { combineReducers } from 'redux';
import search from './search';
import fetchget from './fetchget';
import header from './header';
import login from './login';

export default combineReducers({
	header,
	login,
	search,
  fetchget,
});
