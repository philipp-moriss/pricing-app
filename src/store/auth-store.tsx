import { action, makeAutoObservable, observable } from 'mobx';

type UserInfoType = { name: string; password: unknown };

export class AuthStore {
	@observable
	auth = false;

	@observable
	userInfo: UserInfoType | undefined = {} as UserInfoType;

	@action
	setAuth(auth: boolean): void {
		this.auth = auth;
		return;
	}

	@action
	async setAuthStorage(userData: UserInfoType): Promise<void> {
		this.setAuth(true);
		await this.setUser(userData);
		await localStorage.setItem('auth', 'true');
		return;
	}

	@action
	async removeAuth(): Promise<void> {
		this.setAuth(false);
		await localStorage.removeItem('auth');
		await this.removeUser();
		return;
	}

	@action
	async setUser(userData: UserInfoType): Promise<void> {
		await localStorage.setItem('user-data', JSON.stringify(userData));
		this.userInfo = { name: userData.name, password: userData.password };

		return;
	}

	@action
	async removeUser(): Promise<void> {
		await localStorage.removeItem('user-data');
		return;
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export default new AuthStore();
