import { authApi, userApi } from 'api/api';
import { action, makeObservable, observable } from 'mobx';
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
			localStorage.removeItem('auth');
			this.setAuth(false);
		} catch (e) {
			console.log(e);
		}
	}

	async registration(userData: NewUserType): Promise<any> {
		try {
			const { data } = await authApi.registration(userData);
			return data;
		} catch (e: any) {
			alert(e.response.data.message);
		}
		return;
	}

	async checkAuth(): Promise<any> {
		try {
			const { data } = await authApi.refreshToken();
			localStorage.setItem('token', data.token);
			this.setAuth(true);
			await this.getUser();
		} catch (e) {
			return e;
		}
		return;
	}

	constructor() {
		makeObservable(this, {
			user: observable,
			isAuth: observable,
			setUser: action,
			setAuth: action,
			getUser: action,
			login: action,
			logOutUser: action,
			registration: action,
			checkAuth: action,
		});
		this.setAuth = this.setAuth.bind(this);
		this.getUser = this.getUser.bind(this);
		this.checkAuth = this.checkAuth.bind(this);
		this.login = this.login.bind(this);
		this.logOutUser = this.logOutUser.bind(this);
	}
}

export default new AuthStore();
