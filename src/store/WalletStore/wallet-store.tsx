import { historyApi, spendingApi, walletApi } from 'api/api';
import { action, makeObservable, observable } from 'mobx';
import { NewWalletType, SpendingModel, WalletModelType } from 'store/Type/models';
import { convertToDate } from 'utils/utils';

export class WalletStore {
	wallets: WalletModelType[] | undefined;
	selectedWalletHistory: SpendingModel[] | undefined;
	userId = '';

	clearSelectedWalletHistory(): void {
		this.selectedWalletHistory = [] as SpendingModel[];
		return;
	}
	sortSelectedWalletHistory(sortField: string, isUpDirection: boolean): void {
		this.selectedWalletHistory = this.selectedWalletHistory?.sort((a, b) => {
			if (sortField === 'category') {
				if (a.title?.toLowerCase() > b.title?.toLowerCase()) {
					return isUpDirection ? -1 : 1;
				}
				return isUpDirection ? 1 : -1;
			}
			if (sortField === 'amount') {
				if (a.amount > b.amount) {
					return isUpDirection ? -1 : 1;
				}
				return isUpDirection ? 1 : -1;
			}
			if (sortField === 'date') {
				if (convertToDate(a.createdAt) > convertToDate(b.createdAt)) {
					return isUpDirection ? -1 : 1;
				}
				return isUpDirection ? 1 : -1;
			}
			return 0;
		});
		return;
	}

	async addSpending(data: any): Promise<void> {
		try {
			await spendingApi.addSpending(data);
		} catch (e) {
			alert(e);
		}
		return;
	}

	setWallet(wallet: WalletModelType): void {
		this.wallets?.push(wallet);
		return;
	}

	setWallets(wallets: WalletModelType[]): void {
		this.wallets = wallets;
		return;
	}

	async getWallet(walletId: string): Promise<void> {
		try {
			const { data } = await walletApi.getWallet(walletId, this.userId);
		} catch (e) {
			alert(e);
		}
		return;
	}

	async getCurrentHistory(walletId: string): Promise<void> {
		try {
			const { data } = await historyApi.getCurrentHistory(walletId);
			this.selectedWalletHistory = data;
		} catch (e) {
			alert(e);
		}
		return;
	}

	async getWallets(userId: string): Promise<void> {
		this.userId = userId;
		try {
			const { data } = await walletApi.getWallets(userId);
			this.setWallets(data);
		} catch (e) {
			alert(e);
		}
		return;
	}

	async addWallet(newWallet: NewWalletType): Promise<void> {
		try {
			await walletApi.addWallet(newWallet);
		} catch (e) {
			alert(e);
		}
		return;
	}
	async removeWallet(userId: string, walletId: string): Promise<void> {
		try {
			const { data } = await walletApi.removeWallet(userId, walletId);
			await this.getWallets(userId);
		} catch (e) {
			alert(e);
		}
		return;
	}

	constructor() {
		makeObservable(this, {
			wallets: observable,
			selectedWalletHistory: observable,
			addSpending: action,
			setWallet: action,
			setWallets: action,
			getWallet: action,
			getWallets: action,
			addWallet: action,
			removeWallet: action,
			clearSelectedWalletHistory: action,
			getCurrentHistory: action,
			sortSelectedWalletHistory: action,
		});
		this.addSpending = this.addSpending.bind(this);
		this.getCurrentHistory = this.getCurrentHistory.bind(this);
		this.sortSelectedWalletHistory = this.sortSelectedWalletHistory.bind(this);
		this.setWallet = this.setWallet.bind(this);
		this.setWallets = this.setWallets.bind(this);
		this.getWallet = this.getWallet.bind(this);
		this.getWallets = this.getWallets.bind(this);
		this.removeWallet = this.removeWallet.bind(this);
		this.clearSelectedWalletHistory = this.clearSelectedWalletHistory.bind(this);
	}
}

export default new WalletStore();
