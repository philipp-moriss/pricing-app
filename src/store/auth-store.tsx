import { action, makeAutoObservable, observable } from 'mobx';

export type UserInfoType = { email: string; password: string };
export type NewUserType = { email: string; password: string; name: string; lastName: string };

export class AuthStore {
	@observable
	auth = false;

	@observable
	userInfo: UserInfoType | undefined = {} as UserInfoType;

	@observable
	newUserInfo: NewUserType | undefined = {} as NewUserType;

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
		this.userInfo = userData;

		return;
	}

	@action
	async removeUser(): Promise<void> {
		await localStorage.removeItem('user-data');
		return;
	}

	@action
	async setNewUser(userData: NewUserType): Promise<void> {
		await localStorage.setItem('new-user-data', JSON.stringify(userData));
		this.newUserInfo = userData;
		return;
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export default new AuthStore();
