import { instance } from 'api/config';
import { AxiosResponse } from 'axios';
import {
	NewUserType,
	NewWalletType,
	SpendingModel,
	UserType,
	WalletModelType,
} from 'store/Type/models';

export const walletApi = {
	getWallet(walletId: string): Promise<AxiosResponse<WalletModelType>> {
		return instance.get<WalletModelType>(`/wallet?walletId=${walletId}`);
	},
	getWallets(userId: string): Promise<AxiosResponse<WalletModelType[]>> {
		return instance.get(`/wallet/wallets?userId=${userId}`);
	},
	addWallet(newWallet: NewWalletType): Promise<AxiosResponse<any>> {
		const { userId, name, currency, balance } = newWallet;
		return instance.post<any>(`/wallet`, { userId, wallet: { name, currency, balance } });
	},
	addSpendToWallet(walletId: string, spendingId: string): Promise<AxiosResponse<SpendingModel>> {
		return instance.post<SpendingModel>('/wallet/spending', { walletId, spendingId });
	},
	removeWallet(userId: string, walletId: string) {
		return instance.delete('/wallet', { data: { userId, walletId } });
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
	getUser(): Promise<AxiosResponse<UserType>> {
		return instance.get<UserType>(`/users/user`);
	},
};
export const spendingApi = {
	addSpending(data: any): Promise<AxiosResponse<any>> {
		return instance.post('/spending', data);
	},
};
