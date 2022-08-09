import { action, makeAutoObservable, observable } from 'mobx';

type UserInfoType = { name: string; password: unknown };

export class AuthStore {
	@observable
	auth = false;

	@observable
	userInfo: UserInfoType | undefined = {} as UserInfoType;

	@action
	setAuth(auth: boolean) {
		this.auth = auth;
		return;
	}

	@action
	async setAuthStorage(userData: UserInfoType) {
		this.setAuth(true);
		await this.setUser(userData);
		await localStorage.setItem('auth', 'true');
		return;
	}

	@action
	async removeAuth() {
		this.setAuth(false);
		await localStorage.removeItem('auth');
		await this.removeUser();
		return;
	}

	@action
	async setUser(userData: UserInfoType) {
		await localStorage.setItem('user-data', JSON.stringify(userData));
		this.userInfo = { name: userData.name, password: userData.password };

		return;
	}

	@action
	async removeUser() {
		await localStorage.removeItem('user-data');
		return;
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export default new AuthStore();
