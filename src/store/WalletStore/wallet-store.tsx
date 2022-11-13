import { historyApi, spendingApi, walletApi } from 'api/api';import { action, makeObservable, observable, override } from 'mobx';import React from 'react';import {	CurrencyType,	NewWalletType,	SpendDataType,	SpendingModel,	WalletModelType,} from 'store/Type/models';import { convertToDate } from 'utils/utils';import { BaseStore } from '../BaseStore';export class WalletStore extends BaseStore {	wallets: WalletModelType[] | undefined;	selectedWalletHistory: SpendingModel[] | undefined;	userId = '';	allCurrencyList: CurrencyType[] | undefined;	/*	clearSelectedWalletHistory(): void {            this.selectedWalletHistory = [] as SpendingModel[];            return;        }*/	sortSelectedWalletHistory(sortField: string, isUpDirection: boolean): void {		this.selectedWalletHistory = this.selectedWalletHistory?.sort((a, b) => {			if (sortField === 'category') {				if (a.title?.toLowerCase() > b.title?.toLowerCase()) {					return isUpDirection ? -1 : 1;				}				return isUpDirection ? 1 : -1;			}			if (sortField === 'amount') {				if (a.amount > b.amount) {					return isUpDirection ? -1 : 1;				}				return isUpDirection ? 1 : -1;			}			if (sortField === 'date') {				if (convertToDate(a.createdAt) > convertToDate(b.createdAt)) {					return isUpDirection ? -1 : 1;				}				return isUpDirection ? 1 : -1;			}			return 0;		});		return;	}	async addSpending(data: SpendDataType): Promise<string> {		try {			await spendingApi.addSpending(data);			await this.getWallets(data.userId);			return 'ok';		} catch (e: any) {			return e.response.data.message;		}	}	setWallet(wallet: WalletModelType): void {		this.wallets?.push(wallet);		return;	}	setWallets(wallets: WalletModelType[]): void {		this.wallets = wallets.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1));		return;	}	async getWallet(walletId: string): Promise<void> {		try {			await walletApi.getWallet(walletId, this.userId);		} catch (e) {			console.log(e);		}		return;	}	async getCurrencyList(): Promise<void> {		try {			const { data } = await walletApi.getCurrencyList();			this.allCurrencyList = data;		} catch (e) {			console.log(e);		}		return;	}	async getCurrentHistory(walletId: string): Promise<any> {		try {			const { data } = await historyApi.getCurrentHistory(walletId);			this.selectedWalletHistory = data;			return data;		} catch (e: any) {			console.log(e);		}	}	async getAllHistory(): Promise<string> {		try {			const { data } = await historyApi.getAllHistory();			this.selectedWalletHistory = data;			return 'ok';		} catch (e: any) {			return e.response.data.message;		}	}	async getWallets(userId: string): Promise<void> {		this.userId = userId;		try {			const { data } = await walletApi.getWallets(userId);			this.setWallets(data);		} catch (e) {			console.log(e);		}		return;	}	addWallet = async (newWallet: NewWalletType): Promise<string> => {		try {			await walletApi.addWallet(newWallet);			return 'ok';		} catch (e: any) {			return e.response.data.message;		}	};	async removeWallet(userId: string, walletId: string): Promise<string> {		try {			await walletApi.removeWallet(userId, walletId);			await this.getWallets(userId);			return 'ok';		} catch (e: any) {			return e.response.data.message;		}	}	async updateWallet(walletId: string, wallet: WalletModelType): Promise<string> {		try {			await walletApi.updateWallet(walletId, wallet);			await this.getWallets(wallet.userId);			return 'ok';		} catch (e: any) {			return e.response.data.message;		}	}	constructor() {		super();		makeObservable(this, {			wallets: observable,			selectedWalletHistory: observable,			allCurrencyList: observable,			addSpending: action,			setWallet: action,			setWallets: action,			getWallet: action,			getWallets: action,			addWallet: action,			removeWallet: action,			getCurrentHistory: action,			sortSelectedWalletHistory: action,			getCurrencyList: action,			updateWallet: action,		});		this.addSpending = this.addSpending.bind(this);		this.getCurrentHistory = this.getCurrentHistory.bind(this);		this.getCurrencyList = this.getCurrencyList.bind(this);		this.sortSelectedWalletHistory = this.sortSelectedWalletHistory.bind(this);		this.setWallet = this.setWallet.bind(this);		this.setWallets = this.setWallets.bind(this);		this.getWallet = this.getWallet.bind(this);		this.getWallets = this.getWallets.bind(this);		this.removeWallet = this.removeWallet.bind(this);		this.getAllHistory = this.getAllHistory.bind(this);		this.updateWallet = this.updateWallet.bind(this);	}}export default new WalletStore();