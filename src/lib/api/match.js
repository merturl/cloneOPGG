import axios from 'axios';

import { APIKEY } from './api_key';

const api_key = APIKEY;

function searchMatches(matchId) {
  const url = `/lol/match/v4/matches/${matchId}`
	const options = {
		method: 'GET',
		headers: { 'X-Riot-Token': api_key },
		data: null,
		url,
	};
	return axios(options);
}

function searchMatchlistsByAccount(encryptedAccountId) {
	const url = `/lol/match/v4/matchlists/by-account/${encryptedAccountId}`
	const options = {
		method: 'GET',
		headers: { 'X-Riot-Token': api_key },
		params: {
			beginIndex: 0,
			endIndex: 20,
    },
		data: null,
		url,
	};
	return axios(options);
} 

function searchTimelinesByMatch(matchId) {
	const url = `/lol/match/v4/timelines/by-match/${matchId}`
	const options = {
		method: 'GET',
		headers: { 'X-Riot-Token': api_key },
		data: null,
		url,
	};
	return axios(options);
}

export { searchMatches, searchMatchlistsByAccount, searchTimelinesByMatch };
