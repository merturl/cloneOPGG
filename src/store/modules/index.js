import { combineReducers } from 'redux';
import search from './search';
import summoner from './summoner';
import match from './match';
import matchlists from './matchlists';
import header from './header';
import login from './login';

export default combineReducers({
	header,
	login,
	search,
	summoner,
	match,
	matchlists
});
