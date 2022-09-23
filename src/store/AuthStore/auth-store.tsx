import { authApi, userApi } from 'api/api';
import { API_URL, instance } from 'api/config';
import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { NewUserType, UserType } from 'store/Type/models';

export class AuthStore {
	user: UserType = {} as UserType;

	isAuth: boolean | undefined;

	setUser(userData: UserType): void {
		this.user = userData;
		this.setAuth(true);
	}
	setAuth(auth: boolean): void {
		this.isAuth = auth;
	}

	async getUser(): Promise<void> {
		try {
			const { data } = await userApi.getUser();
			this.setUser(data);
		} catch (e: any) {
			console.dir(e);
		}
	}

	async login(userData: { email: string; password: string }): Promise<void> {
		try {
			const { data } = await authApi.login(userData.email, userData.password);
			localStorage.setItem('token', data.token);
			this.setAuth(true);
			await this.getUser();
		} catch (e) {
			console.dir(e);
		}
	}

	async logOutUser(): Promise<void> {
		try {
			await authApi.logOut();
			localStorage.removeItem('token');
			this.setAuth(false);
		} catch (e) {
			console.log(e);
		}
	}

	async registration(userData: NewUserType): Promise<void> {
		try {
			await authApi.registration(userData);
		} catch (e) {
			console.log(e);
		}
		return;
	}

	async checkAuth(): Promise<void> {
		try {
			const { data } = await authApi.refreshToken();
			localStorage.setItem('token', data.token);
			this.setAuth(true);
			await this.getUser();
		} catch (e) {
			console.dir(e);
		}
		return;
	}
	constructor() {
		makeAutoObservable(this);
		this.setAuth = this.setAuth.bind(this);
		this.getUser = this.getUser.bind(this);
		this.checkAuth = this.checkAuth.bind(this);
		this.login = this.login.bind(this);
		this.logOutUser = this.logOutUser.bind(this);
	}
}

export default new AuthStore();
