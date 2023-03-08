import React from 'react';import RootStore from '../../store/RootStore/root-store';import {	LoadingEnum,	NewWalletType,	ReplenishmentDataType,	SpendDataType,	WalletModelType,} from '../../store/Type/models';export class WalletStoreService {	rootStore: typeof RootStore;	constructor(rootStore: typeof RootStore) {		this.rootStore = rootStore;	}	async addWallet(newWallet: NewWalletType): Promise<void> {		try {			await this.rootStore.WalletStore.addWallet(newWallet);			await this.rootStore.WalletStore.getWallets(newWallet.userId);			this.rootStore.Notification.setNotification('success', true);		} catch (e: any) {			this.rootStore.Notification.setNotification('error', true, e.response.data.message);			return e.response.data.message;		}	}	async addSpending(data: SpendDataType): Promise<void> {		try {			await this.rootStore.WalletStore.addSpending(data);			this.rootStore.Notification.setNotification('success', true);		} catch (e: any) {			this.rootStore.Notification.setNotification('error', true, e.response.data.message);			return e.response.data.message;		}	}	async addReplenishment(data: ReplenishmentDataType): Promise<void> {		try {			await this.rootStore.WalletStore.addReplenishment(data);			this.rootStore.Notification.setNotification('success', true);		} catch (e: any) {			this.rootStore.Notification.setNotification('error', true, e.response.data.message);			return e.response.data.message;		}	}	async removeWallet(userId: string, walletId: string): Promise<void> {		try {			await this.rootStore.WalletStore.removeWallet(userId, walletId);			this.rootStore.Notification.setNotification('success', true);		} catch (e: any) {			this.rootStore.Notification.setNotification('error', true, e.response.data.message);			return e.response.data.message;		}	}	async updateWallet(walletId: string, wallet: WalletModelType): Promise<void> {		try {			await this.rootStore.WalletStore.updateWallet(walletId, wallet);			this.rootStore.Notification.setNotification('success', true);		} catch (e: any) {			this.rootStore.Notification.setNotification('error', true, e.response.data.message);			return e.response.data.message;		}	}	async getWallets(userId: string): Promise<void> {		this.rootStore.Notification.setIsLoading(LoadingEnum.fetching);		try {			await this.rootStore.WalletStore.getWallets(userId);			this.rootStore.Notification.setNotification('success', true);		} catch (e: any) {			this.rootStore.Notification.setNotification('error', true, e.response.data.message);			return e.response.data.message;		} finally {			this.rootStore.Notification.setIsLoading(LoadingEnum.success);		}	}}export default WalletStoreService;