import { instance } from 'api/config';
import { AxiosResponse } from 'axios';
import { SpendingModel, WalletModelType } from 'store/Type/models';

export const walletApi = {
	getWallet(walletId: string): Promise<AxiosResponse<WalletModelType>> {
		return instance.get<WalletModelType>(`/wallet?walletId=${walletId}`);
	},
	postSpendToWallet(walletId: string, spendingId: string): Promise<AxiosResponse<SpendingModel>> {
		return instance.post<SpendingModel>('/wallet/spending', { walletId, spendingId });
	},
};

export const authApi = {
	login(email: string, password: string) {
		return instance.post(`auth/login`, { email, password });
	},
	logOut(email: string | undefined) {
		return instance.post(`auth/logOut`, { email });
	},
	registration(email: string, password: string) {
		return instance.post('auth/register', { email, password });
	},
};

export const userApi = {
	getUser(id: string) {
		return instance.get(`/users/user/${id}`);
	},
};
