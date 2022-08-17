export type UserInfoType = { email: string; password: string };

export type NewUserType = { email: string; password: string; name: string; lastName: string };

export type CategoriesType = {
	value: number; // value это id, библиотека React select принимает обьект строго с value и label
	label: string;
};

export type MyCategoriesType = {
	categories: CategoriesType;
	amount: number;
};

export type WalletType = {
	id: number;
	currentCurrency: string;
	account: number;
	myCategories: MyCategoriesType[];
};
