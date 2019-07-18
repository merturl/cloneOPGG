import { combineReducers } from 'redux';
import search from './search';
import summoner from './summoner';
import match from './match';
import matchlists from './matchlists';
import header from './header';
import auth from './auth';

export default combineReducers({
	header,
	auth,
	search,
	summoner,
	match,
	matchlists
});
