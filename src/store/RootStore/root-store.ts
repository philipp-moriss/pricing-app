import { makeAutoObservable } from 'mobx';
import AuthStore from 'store/AuthStore/auth-store';
import CategoriesStore from 'store/CategoriesStore/categories-store';
import WalletStore from 'store/WalletStore';

import WalletStoreService from '../../Sevice/WalletStoreService';
import NotificationStore from '../NotificationStore/notification-store';

export class RootStore {
	WalletStoreService: WalletStoreService = null as unknown as WalletStoreService;
	WalletStore: typeof WalletStore = null as unknown as typeof WalletStore;
	AuthStore: typeof AuthStore = null as unknown as typeof AuthStore;
	CategoriesStore: typeof CategoriesStore = null as unknown as typeof CategoriesStore;
	Notification: typeof NotificationStore = null as unknown as typeof NotificationStore;

	constructor() {
		makeAutoObservable(this);
		this.WalletStoreService = new WalletStoreService(this);
		this.WalletStore = WalletStore;
		this.AuthStore = AuthStore;
		this.CategoriesStore = CategoriesStore;
		this.Notification = NotificationStore;
	}
}

export default new RootStore();
