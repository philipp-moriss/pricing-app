import { spendingApi, walletApi } from 'api/api';
import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { AuthStore } from 'store/AuthStore';
import { NewWalletType, WalletModelType } from 'store/Type/models';

export class WalletStore {
	wallets: WalletModelType[] | undefined;

	userId = '';
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
			const { data } = await walletApi.getWallet(walletId);
			this.setWallet(data);
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
			await this.getWallets(this.userId);
		} catch (e) {
			alert(e);
		}
		return;
	}
	async removeWallet(userId: string, walletId: string): Promise<void> {
		try {
			const { data } = await walletApi.removeWallet(userId, walletId);
			await this.getWallets(this.userId);
		} catch (e) {
			alert(e);
		}
		return;
	}

	constructor() {
		makeObservable(this, {
			wallets: observable,
			addSpending: action,
			setWallet: action,
			setWallets: action,
			getWallet: action,
			getWallets: action,
			addWallet: action,
			removeWallet: action,
		});
		this.addSpending = this.addSpending.bind(this);
		this.setWallet = this.setWallet.bind(this);
		this.setWallets = this.setWallets.bind(this);
		this.getWallet = this.getWallet.bind(this);
		this.getWallets = this.getWallets.bind(this);
		this.removeWallet = this.removeWallet.bind(this);
	}
}

export default new WalletStore();
