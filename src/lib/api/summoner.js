import axios from 'axios';

const api_key = 'RGAPI-4a6af00f-fdce-4e47-b528-12b43e770e69';

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

export { searchSummonerByName, serachEntriesBySummoner };
