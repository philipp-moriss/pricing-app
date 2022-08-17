import { makeAutoObservable } from 'mobx';
import { MyCategoriesType, WalletType } from 'store/Type/models';

export class WalletStore {
	wallet: WalletType = {
		id: 1,
		currentCurrency: 'BY',
		account: 220,
		myCategories: [
			{ categories: { label: 'adaqqqds', value: 1313 }, amount: 1310 },
			{
				categories: {
					label: 'adad1313s',
					value: 1312,
				},
				amount: 1110,
			},
			{
				categories: {
					label: 'adads1213',
					value: 1311,
				},
				amount: 22230,
			},
			{
				categories: {
					label: 'adads1213',
					value: 13111,
				},
				amount: 22230,
			},
			{
				categories: {
					label: 'adads1213',
					value: 13411,
				},
				amount: 22230,
			},
			{
				categories: {
					label: 'adads1213',
					value: 1312311,
				},
				amount: 22230,
			},
			{
				categories: {
					label: 'adads1213',
					value: 13161,
				},
				amount: 22230,
			},
			{
				categories: {
					label: 'adads1213',
					value: 131451,
				},
				amount: 22230,
			},
			{
				categories: {
					label: 'adads1213',
					value: 13811,
				},
				amount: 22230,
			},
		],
	};

	addToWallet(account: number): void {
		this.wallet.account = account;
		return;
	}

	addSpend(currentSpend: MyCategoriesType): void {
		const checkCategory = this.wallet.myCategories.find(
			(category) => category.categories.label === currentSpend.categories.label,
		);
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
	}

	subtractToWallet(chargeAmount: number): void {
		if (this.wallet !== undefined) {
			const currentAmount = this.wallet?.account - chargeAmount;
			this.wallet = { ...this.wallet, account: currentAmount };
		}
		return;
	}

	constructor() {
		makeAutoObservable(this);
		this.addSpend = this.addSpend.bind(this);
	}
}

export default new WalletStore();
