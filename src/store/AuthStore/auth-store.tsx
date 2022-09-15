import { authApi, userApi } from 'api/api';
import { makeAutoObservable } from 'mobx';
import { NewUserType } from 'store/Type/models';

export class AuthStore {
	user: any;

	newUserInfo: NewUserType | undefined = {} as NewUserType;

	async login(userData: any) {
		try {
			const { data } = await authApi.login(userData.email, userData.password);
			this.setUser(userData);
			localStorage.setItem('token', JSON.stringify(data.token));
			localStorage.setItem('id', JSON.stringify(data._id));
		} catch (e) {
			alert('Wrong login or password');
		}
		return;
	}

	async logOutUser() {
		try {
			await authApi.logOut();
			this.user = undefined;
			localStorage.removeItem('token');
			alert('ok');
		} catch (e) {
			alert(e);
		}
	}

	setUser(userData: any) {
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
		const id = JSON.parse(localStorage.getItem('id') as string);
		try {
			const user = await userApi.getUser(id);
			this.setUser(user);
		} catch (e) {
			alert(e);
		}
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export default new AuthStore();
