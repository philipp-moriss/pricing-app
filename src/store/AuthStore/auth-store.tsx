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
		const { data } = await authApi.login(userData.email, userData.password);
		localStorage.setItem('token', data.token);
		this.setAuth(true);
		await this.getUser();
	}

	async logOutUser(): Promise<void> {
		await authApi.logOut();
		localStorage.removeItem('token');
		localStorage.removeItem('auth');
		this.setAuth(false);
	}

	async registration(userData: NewUserType): Promise<void> {
		await authApi.registration(userData);
	}

	async checkAuth(): Promise<any> {
		const { data } = await authApi.refreshToken();
		localStorage.setItem('token', data.token);
		this.setAuth(true);
		await this.getUser();
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
