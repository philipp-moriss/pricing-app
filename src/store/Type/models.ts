export type UserInfoType = { email: string; password: string; id: string };

export type NewUserType = { email: string; password: string; name: string; lastName: string };

export type CategoryType = {
	value: string; // value это id, библиотека React select принимает обьект строго с value и label
	label: string;
};

export type MyCategoriesType = {
	category: CategoryType;
	amount: number;
	date: string;
	time: string;
};

export type WalletType = {
	name: string;
	id: number;
	currentCurrency: string;
	account: number;
	myCategories: MyCategoriesType[];
	fullHistory: MyCategoriesType[];
	totalSpends: number;
};

export type WalletModelType = {
	_id: string;
	icon: string;
	name: string;
	balance: number;
	currency: string;
	totalSpends: number;
	myCategories: Array<CategoryModelType>;
	history: Array<SpendingModel>;
};

export type CategoryModelType = {
	_id: string;
	value: string;
	amount: number;
};
export type SpendingModel = {
	_id: string;
	title: string;
	description: string;
	category: string;
	amount: number;
	date: Date;
};
export enum LoadingType {
	initial = 'initial',
	fetching = 'fetching',
	success = 'success',
	error = 'error',
	loadingMore = 'loadingMore',
}
