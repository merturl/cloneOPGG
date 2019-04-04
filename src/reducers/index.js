import { combineReducers } from 'redux';
import counter from './counter';
import search from './search';
import login from './login';
import header from './header';


export default combineReducers({
  counter,
  search,
  login,
  header
});
