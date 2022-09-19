import { walletApi } from 'api/api';
import { makeAutoObservable } from 'mobx';
import { NewWalletType, WalletModelType } from 'store/Type/models';

export class WalletStore {
	wallets: WalletModelType[] | undefined;

	async addSpend(walletId: string, spendingId: string): Promise<void> {
		try {
			await walletApi.addSpendToWallet(walletId, spendingId);
			this.getWallet(walletId);
		} catch (e) {
			alert(e);
		}
		return;
	}

	setWalletLocalStorage(): void {
		localStorage.setItem('wallet', JSON.stringify(this.wallets));
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
			await this.getWallets('6327580c3bc6e8fb2254c4f6');
		} catch (e) {
			alert(e);
		}
		return;
	}
	async removeWallet(userId: string, walletId: string): Promise<void> {
		try {
			const { data } = await walletApi.removeWallet(userId, walletId);
			await this.getWallets('6327580c3bc6e8fb2254c4f6');
		} catch (e) {
			alert(e);
		}
		return;
	}

	constructor() {
		makeAutoObservable(this);
		this.addSpend = this.addSpend.bind(this);
		this.setWalletLocalStorage = this.setWalletLocalStorage.bind(this);
		this.setWallet = this.setWallet.bind(this);
		this.setWallets = this.setWallets.bind(this);
		this.getWallet = this.getWallet.bind(this);
		this.getWallets = this.getWallets.bind(this);
		this.removeWallet = this.removeWallet.bind(this);
	}
}

export default new WalletStore();
