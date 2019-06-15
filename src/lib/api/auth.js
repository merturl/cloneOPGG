import axios from 'axios';

import { APIKEY } from './api_key';

const api_key = APIKEY;

function auth(matchId) {
  const url = `/auth`
	const options = {
		method: 'GET',
		headers: { 'X-Riot-Token': api_key },
		data: null,
		url,
	};
	return axios(options);
}
export { auth  };
