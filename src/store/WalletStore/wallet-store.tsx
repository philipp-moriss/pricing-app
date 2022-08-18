import { makeAutoObservable } from 'mobx';
import { MyCategoriesType, WalletType } from 'store/Type/models';

export class WalletStore {
	wallet: WalletType = {
		name: 'Salary',
		id: 1,
		currentCurrency: 'BY',
		account: 220,
		totalSpends: 0,
		myCategories: [] as MyCategoriesType[],
		fullHistory: [] as MyCategoriesType[],
	};

	addToSpends(spends: number): void {
		if (!this.wallet) return;
		this.wallet.totalSpends = spends;
		this.setWalletLocalStorage();
		return;
	}

	addSpend(currentSpend: MyCategoriesType): void {
		const checkCategory = this.wallet?.myCategories.findIndex(
			(category) => category.category.label === currentSpend.category.label,
		);
		if (checkCategory >= 0) {
			this.wallet.myCategories.forEach((category, index) => {
				if (checkCategory === index) {
					this.wallet.myCategories[index] = {
						...currentSpend,
						amount: this.wallet.myCategories[index].amount + currentSpend.amount,
					};
				}
			});
		} else {
			this.wallet?.myCategories.push(currentSpend);
		}
		this.wallet?.fullHistory?.unshift(currentSpend);
		const currentSpends = this.wallet?.totalSpends + currentSpend.amount;
		this.addToSpends(currentSpends);
		return;
	}

	setWalletLocalStorage(): void {
		localStorage.setItem('wallet', JSON.stringify(this.wallet));
		return;
	}

	setWallet(wallet: WalletType): void {
		this.wallet = wallet;
		return;
	}

	subtractToSpends(chargeAmount: number): void {
		if (this.wallet === undefined) return;
		const currentAmount = this.wallet?.account - chargeAmount;
		this.wallet = { ...this.wallet, account: currentAmount };
		return;
	}

	constructor() {
		makeAutoObservable(this);
		this.addToSpends = this.addToSpends.bind(this);
		this.addSpend = this.addSpend.bind(this);
		this.setWalletLocalStorage = this.setWalletLocalStorage.bind(this);
		this.setWallet = this.setWallet.bind(this);
	}
}

export default new WalletStore();
