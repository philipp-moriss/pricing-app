import { action, makeAutoObservable, observable } from 'mobx';

export class AuthStore {
	@observable
	auth = false;

	@action
	setAuth(auth: boolean) {
		console.log(this.auth);
		if (!auth) return;
		this.auth = auth;
		return;
	}

	@action
	setAuthStorage(userData: {}) {
		localStorage.setItem('user-data', JSON.stringify(userData));
		localStorage.setItem('auth', 'true');
		this.setAuth(true);
		return;
	}

	@action
	removeAuth() {
		localStorage.removeItem('user-data');
		localStorage.removeItem('auth');
		this.setAuth(false);
		return;
	}

	constructor() {
		makeAutoObservable(this);
		/*	makeObservable(this, {
			removeAuth: action,
			setAuthStorage: action,
			setAuth: action,
			auth: observable,
		});*/
	}
}

export default new AuthStore();
