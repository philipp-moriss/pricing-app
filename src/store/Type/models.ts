export type UserInfoType = { email: string; password: string };

export type NewUserType = { email: string; password: string; name: string; lastName: string };

export type CategoriesType = {
	value: number; // value это id, библиотека React select принимает обьект строго с value и label
	label: string;
};

export type MyCategoriesType = {
	categories: CategoriesType;
	amount: number;
	date: string;
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
