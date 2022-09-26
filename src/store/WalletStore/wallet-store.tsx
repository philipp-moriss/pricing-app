import { spendingApi, walletApi } from 'api/api';
import { action, makeObservable, observable } from 'mobx';
import { NewWalletType, WalletModelType } from 'store/Type/models';

export class WalletStore {
	wallets: WalletModelType[] | undefined;
	selectedWalletHistory: WalletModelType | undefined;
	userId = '';

	setSelectedWalletHistory(idWallet: string): void {
		const currentWallet = this.wallets?.find((wallet) => wallet._id === idWallet);
		this.selectedWalletHistory = currentWallet;
		return;
	}

	clearSelectedWalletHistory(): void {
		this.selectedWalletHistory = {} as WalletModelType;
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
			setSelectedWalletHistory: action,
			clearSelectedWalletHistory: action,
		});
		this.addSpending = this.addSpending.bind(this);
		this.setWallet = this.setWallet.bind(this);
		this.setWallets = this.setWallets.bind(this);
		this.getWallet = this.getWallet.bind(this);
		this.getWallets = this.getWallets.bind(this);
		this.removeWallet = this.removeWallet.bind(this);
		this.setSelectedWalletHistory = this.setSelectedWalletHistory.bind(this);
		this.clearSelectedWalletHistory = this.clearSelectedWalletHistory.bind(this);
	}
}

export default new WalletStore();
