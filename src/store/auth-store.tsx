import { action, makeAutoObservable, observable } from 'mobx';

export class AuthStore {
	@observable
	auth = false;

	@action
	setAuth(auth: boolean) {
		this.auth = auth;
		return;
	}

	@action
	async setAuthStorage(userData: {}) {
		this.setAuth(true);
		await localStorage.setItem('user-data', JSON.stringify(userData));
		await localStorage.setItem('auth', 'true');
		return;
	}

	@action
	async removeAuth() {
		this.setAuth(false);
		await localStorage.removeItem('user-data');
		await localStorage.removeItem('auth');
		return;
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export default new AuthStore();
