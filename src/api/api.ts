import { instance } from 'api/config';
import { AxiosResponse } from 'axios';
import { NewUserType, SpendingModel, WalletModelType } from 'store/Type/models';

export const walletApi = {
	getWallet(walletId: string): Promise<AxiosResponse<WalletModelType>> {
		return instance.get<WalletModelType>(`/wallet?walletId=${walletId}`);
	},
	addWallet(newWallet: any, userId: string): Promise<AxiosResponse<any>> {
		return instance.post<any>(`/wallet`, { userId, wallet: newWallet });
	},
	postSpendToWallet(walletId: string, spendingId: string): Promise<AxiosResponse<SpendingModel>> {
		return instance.post<SpendingModel>('/wallet/spending', { walletId, spendingId });
	},
};

export const authApi = {
	login(email: string, password: string) {
		return instance.post(`auth/login`, { email, password });
	},
	logOut() {
		return instance.post(`auth/logout`);
	},
	registration(userData: NewUserType) {
		const { email, password, lastName, name } = userData;
		return instance.post('auth/register', { email, password, lastName, name });
	},
};

export const userApi = {
	getUser(id: string) {
		return instance.get(`/users/user/${id}`);
	},
};
