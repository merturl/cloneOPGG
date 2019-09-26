import axios from 'axios';

import { APIKEY } from './api_key';

const api_key = APIKEY;

export const login = (username, password) => {
  const url = `/api/auth/login`;
	const options = {
		method: 'POST',
		headers: { 'X-Riot-Token': api_key },
		data: {username, password},
		url,
	};
	return axios(options);
}

export const logout = () => {
  const url = `/api/auth/logout`;
	const options = {
		method: 'POST',
		headers: { 'X-Riot-Token': api_key },
		data: null,
		url,
	};
	return axios(options);
}

export const checkLogin = () => {
	const url = `/api/auth/check`;
	const options = {
		method: 'GET',
		headers: { 'X-Riot-Token': api_key },
		data: null,
		url,
	};
	return axios(options);
}