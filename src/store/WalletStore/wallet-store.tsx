import { makeAutoObservable } from 'mobx';
import { CategoriesType } from 'store/CategoriesStore/categories-store';

export type MyCategoriesType = {
	categories: CategoriesType
	amount: number
}
export type WalletType = {
	id: number;
	currentCurrency: string;
	account: number;
	myCategories: MyCategoriesType[]
};

export class WalletStore {

	wallet: WalletType = {
		id: 1,
		currentCurrency: 'BY',
		account: 220,
		myCategories: [
			{ categories: { label: 'adads', value: 1313 }, amount: 0 },
		],
	};

	addToWallet(account: number): void {
		this.wallet.account = account;
		return;
	}

	addSpend = (currentSpend: MyCategoriesType): void => {
		const checkCategory = this.wallet.myCategories.find(category => category.categories.label === currentSpend.categories.label);
		if (checkCategory) {
			this.wallet.myCategories.find((category) => {
				if (category.categories.label === currentSpend.categories.label) {
					return { ...category, amount: category.amount + currentSpend.amount };
				}
				return category;
			});
		} else {
			this.wallet.myCategories.push(currentSpend);
		}
		const currentAccount = this.wallet.account - currentSpend.amount;
		this.addToWallet(currentAccount);
		return;
	};

	subtractToWallet(chargeAmount: number): void {
		if (this.wallet !== undefined) {
			const currentAmount = this.wallet!.account - chargeAmount;
			this.wallet = { ...this.wallet, account: currentAmount };
		}
		return;
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export default new WalletStore();
