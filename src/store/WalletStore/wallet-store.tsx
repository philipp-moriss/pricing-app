import { walletApi } from 'api/api';
import { makeAutoObservable } from 'mobx';
import { WalletModelType } from 'store/Type/models';

export class WalletStore {
	wallet: WalletModelType[] | undefined;
	/*= {
		_id: '2',
		icon: '123',
		name: 'wew',
		balance: 123,
		currency: '131313',
		totalSpends: 1234,
		myCategories: [
			{
				_id: '123',
				value: '13131',
				amount: 1231,
			},
		],
		history: [
			{
				_id: '1',
				title: '123',
				description: '1313',
				category: '3131',
				amount: 1234,
				date: '20/08/2021' as unknown as Date,
			},
		],
	};*/

	/*	addToSpends(spends: number): void {
		if (!this.wallet) return;
		this.wallet.totalSpends = spends;
		this.setWalletLocalStorage();
		return;
	}*/

	async addSpend(walletId: string, spendingId: string): Promise<void> {
		/*	const checkCategory = this.wallet?.myCategories.findIndex(
			(category) => category.value === currentSpend.value,
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
				this.wallet?.history?.unshift(currentSpend);
		const currentSpends = this.wallet?.totalSpends + currentSpend.amount;*/
		try {
			await walletApi.postSpendToWallet(walletId, spendingId);
			this.getWallet(walletId);
		} catch (e) {
			alert(e);
		}
		return;
	}

	setWalletLocalStorage(): void {
		localStorage.setItem('wallet', JSON.stringify(this.wallet));
		return;
	}

	setWallet(wallet: WalletModelType): void {
		this.wallet?.push(wallet);
		return;
	}

	/*	subtractToSpends(chargeAmount: number): void {
		if (this.wallet === undefined) return;
		const currentAmount = this.wallet?.totalSpends - chargeAmount;
		this.wallet = { ...this.wallet, account: currentAmount };
		return;
	}*/

	async getWallet(walletId: string): Promise<void> {
		try {
			const { data } = await walletApi.getWallet(walletId);
			this.setWallet(data);
		} catch (e) {
			alert(e);
		}
		return;
	}
	async addWallet(newWallet: any, userId: string): Promise<void> {
		try {
			await walletApi.addWallet(newWallet, userId);
		} catch (e) {
			alert(e);
		}
		return;
	}
	constructor() {
		makeAutoObservable(this);
		this.addSpend = this.addSpend.bind(this);
		this.setWalletLocalStorage = this.setWalletLocalStorage.bind(this);
		this.setWallet = this.setWallet.bind(this);
		this.getWallet = this.getWallet.bind(this);
	}
}

export default new WalletStore();
