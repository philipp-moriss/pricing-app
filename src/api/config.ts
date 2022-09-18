import axios from 'axios';

export const instance = axios.create({
	baseURL: 'http://localhost:3001/api',
	headers: {
		authorization: `Barer ${JSON.parse(<string>localStorage.getItem('token'))}`,
	},
});

axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		// eslint-disable-next-line prettier/prettier
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	},
);
