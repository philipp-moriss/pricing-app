import { spendingApi, walletApi } from 'api/api';import { action, makeObservable, observable } from 'mobx';import React from 'react';import { CurrencyType, NewWalletType, SpendDataType, WalletModelType } from 'store/Type/models';export class WalletStore {	wallets: WalletModelType[] = [];	userId = '';	allCurrencyList: CurrencyType[] = [];	walletsCount = 0;	async addSpending(data: SpendDataType): Promise<void> {		await spendingApi.addSpending(data);		await this.getWallets(data.userId);	}	setWallets(wallets: WalletModelType[]): void {		this.wallets = wallets.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1));		this.walletsCount = this.wallets.length;		return;	}	async getWallet(walletId: string): Promise<void> {		try {			await walletApi.getWallet(walletId, this.userId);		} catch (e) {			console.log(e);		}		return;	}	async getWallets(userId: string): Promise<void> {		this.userId = userId;		const { data } = await walletApi.getWallets(userId);		this.setWallets(data);	}	addWallet = async (newWallet: NewWalletType): Promise<void> => {		await walletApi.addWallet(newWallet);	};	async removeWallet(userId: string, walletId: string): Promise<void> {		await walletApi.removeWallet(userId, walletId);		await this.getWallets(userId);	}	async updateWallet(walletId: string, wallet: WalletModelType): Promise<void> {		await walletApi.updateWallet(walletId, wallet);		await this.getWallets(wallet.userId);	}	constructor() {		makeObservable(this, {			wallets: observable,			allCurrencyList: observable,			walletsCount: observable,			addSpending: action,			setWallets: action,			getWallet: action,			getWallets: action,			addWallet: action,			removeWallet: action,			updateWallet: action,		});		this.addSpending = this.addSpending.bind(this);		this.setWallets = this.setWallets.bind(this);		this.getWallet = this.getWallet.bind(this);		this.getWallets = this.getWallets.bind(this);		this.removeWallet = this.removeWallet.bind(this);		this.updateWallet = this.updateWallet.bind(this);	}}export default new WalletStore();