import { makeAutoObservable } from 'mobx';
import { NewUserType, UserInfoType } from 'store/Type/models';

export class AuthStore {
	auth = false;

	userInfo: UserInfoType | undefined;

	newUserInfo: NewUserType | undefined = {} as NewUserType;

	setAuth(auth: boolean): void {
		this.auth = auth;
		return;
	}

	async setAuthStorage(userData: UserInfoType): Promise<void> {
		this.setAuth(true);
		await this.setUser(userData);
		await localStorage.setItem('auth', 'true');
		return;
	}

	async removeAuth(): Promise<void> {
		this.setAuth(false);
		await localStorage.removeItem('auth');
		await this.removeUser();
		return;
	}

	async setUser(userData: UserInfoType): Promise<void> {
		await localStorage.setItem('user-data', JSON.stringify(userData));
		this.userInfo = userData;

		return;
	}

	async removeUser(): Promise<void> {
		await localStorage.removeItem('user-data');
		return;
	}

	setNewUser(userData: NewUserType): void {
		localStorage.setItem('new-user-data', JSON.stringify(userData));
		this.newUserInfo = userData;
		return;
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export default new AuthStore();
