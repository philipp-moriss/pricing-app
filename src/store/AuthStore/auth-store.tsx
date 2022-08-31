import { authApi, userApi } from 'api/api';
import { makeAutoObservable } from 'mobx';
import { BaseStore } from 'store/BaseStore';
import { NewUserType } from 'store/Type/models';

export class AuthStore {
	user: any;

	/*createdAt: "2022-08-31T07:33:01.002Z"
	email: "12@mail.ru"
	passwordHash: "$2b$04$8U4gG6Z4tT4Uuc3zqZIxPey9M7yXBN7shvkhJHtoisOU90B0M8JOi"
	updatedAt: "2022-08-31T07:33:01.002Z"
	__v: 0
	_id: "630f0eac99d08b502d42f3ef"*/

	newUserInfo: NewUserType | undefined = {} as NewUserType;

	async login(userData: any) {
		try {
			const { data } = await authApi.login(userData.email, userData.password);
			this.setUser(userData);
			localStorage.setItem('userId', JSON.stringify(data._id));
		} catch (e) {
			alert('Wrong login or password');
		}
		return;
	}

	async logOutUser(email: string | undefined) {
		try {
			await authApi.logOut(email);
			this.user = undefined;
			localStorage.removeItem('userId');
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
			await authApi.registration(userData.email, userData.password);
		} catch (e) {
			alert(e);
		}
		/*	localStorage.setItem('new-user-data', JSON.stringify(userData));
		this.newUserInfo = userData;*/
		return;
	}

	async getUser(id: string) {
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
