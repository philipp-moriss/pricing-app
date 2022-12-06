import { authApi } from 'api/api';
import axios from 'axios';
import i18n from 'i18next';

import BaseStore from '../store/NotificationStore/notification-store';

export const API_URL = 'https://pony-web-orign.onrender.com/api/';
export const instance = axios.create({
	baseURL: 'https://server-pricing-production.up.railway.app/api',
});

// Request interceptor for API calls
instance.interceptors.request.use(
	async (config) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers = {
				Authorization: `Bearer ${token}`,
			};
		}
		return config;
	},
	(error) => {
		Promise.reject(error);
	},
);

// Response interceptor for API calls
instance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;
		if (error.response.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true;
			const { data } = await authApi.refreshToken();
			axios.defaults.headers.common['authorization'] = 'Bearer ' + data.token;
			return instance(originalRequest);
		}
		return Promise.reject(error);
	},
);
