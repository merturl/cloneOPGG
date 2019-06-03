import axios from 'axios';

const api_key = 'RGAPI-4a6af00f-fdce-4e47-b528-12b43e770e69';

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
