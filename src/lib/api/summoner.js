import axios from 'axios';

const api_key = 'RGAPI-a815ada5-1a42-4c28-90ef-683c0ed69c40';

function searchSummonerByName(name) {
	const username = name ? name : '';
	const url = `/lol/summoner/v4/summoners/by-name/${username}`;

	const options = {
		method: 'GET',
		headers: { 'X-Riot-Token': api_key },
		data: null,
		url,
	};
	return axios(options);
}
	
function serachMatchlistsByAccount(encryptedAccountId) {
	const url = `/lol/match/v4/matchlists/by-account/${encryptedAccountId}`
	const options = {
		method: 'GET',
		headers: { 'X-Riot-Token': api_key },
		data: null,
		url,
	};
	return axios(options);
}

function serachEntriesBySummoner(encryptedSummonerId) {
	const url = `/lol/league/v4/entries/by-summoner/${encryptedSummonerId}`
	const options = {
		method: 'GET',
		headers: { 'X-Riot-Token': api_key },
		data: null,
		url,
	};
	return axios(options);
}




export { searchSummonerByName, serachMatchlistsByAccount, serachEntriesBySummoner };
