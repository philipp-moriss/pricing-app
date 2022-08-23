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
