import { authApi, userApi } from 'api/api';
import { makeAutoObservable } from 'mobx';
import { NewUserType, UserType } from 'store/Type/models';

export class AuthStore {
	user: UserType | undefined;

	async login(userData: { email: string; password: string }) {
		try {
			const { data } = await authApi.login(userData.email, userData.password);
			localStorage.setItem('token', JSON.stringify(data.token));
			this.getUser();
		} catch (e) {
			alert('Wrong login or password');
		}
		return;
	}

	async logOutUser() {
		try {
			await authApi.logOut();
			this.user = {} as UserType;
			localStorage.removeItem('token');
			alert('ok');
		} catch (e) {
			alert(e);
		}
	}

	setUser(userData: UserType) {
		this.user = userData;
	}

	async registration(userData: NewUserType) {
		try {
			await authApi.registration(userData);
		} catch (e) {
			alert(e);
		}
		return;
	}

	async getUser() {
		try {
			const { data } = await userApi.getUser();
			this.setUser(data);
		} catch (e) {
			alert(e);
		}
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export default new AuthStore();
