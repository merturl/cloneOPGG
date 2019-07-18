import axios from 'axios';

import { APIKEY } from './api_key';

const api_key = APIKEY;

function auth(username, password) {
  const url = `/api/auth/login`
	const options = {
		method: 'POST',
		headers: { 'X-Riot-Token': api_key },
		data: {username, password},
		url,
	};
	return axios(options);
}
export { auth  };
