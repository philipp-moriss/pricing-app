import wallet from 'assets/images/wallet.png';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import CategoriesStore from 'store/CategoriesStore';
import WalletStore from 'store/WalletStore';
import { MyCategoriesType } from 'store/WalletStore/wallet-store';
import { Autosuggest } from 'view/components/UiComponent/Autosuggest/Autosuggest';
import { Button } from 'view/components/UiComponent/Button/Button';
import { CustomInput } from 'view/components/UiComponent/CustomInput/CustomInput';
import { Title } from 'view/components/UiComponent/Title/Title';
import { TotalAmount } from 'view/pages/Main/Wallet/TotalAmount/TotalAmount';
import styles from './Wallet.module.scss';

export const Wallet = observer((): React.ReactElement => {
	const { categories } = CategoriesStore;
	const { addSpend } = WalletStore;
	const [spendData, setSpendData] = useState<MyCategoriesType>({
		amount: 0,
		categories: {
			value: 0,
			label: '',
		},
	});

	const spendHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.currentTarget;
		if (!value) {
			setSpendData({ ...spendData, amount: 0 });
		} else {
			setSpendData({ ...spendData, amount: +e.currentTarget.value });
		}
	};

	const saveHandler = (): void => {
		addSpend(spendData);
	};

	return (
		<div className={styles['wallet']}>
			<div className={styles['wallet__wrapper']}>
				<div className={styles['wallet__body']}>
					<Title title={'Your wallet'} size={'h3'} />
					<Autosuggest
						label={'Category selection'}
						options={categories}
						callBack={(value): void => {
							setSpendData({ ...spendData, categories: value });
						}}
					/>
					<CustomInput
						label={'The amount you spend'}
						type={'number'}
						value={spendData.amount ?? ''}
						onChange={(e): void => spendHandler(e)}
					/>
					<Button textBtn={'Save'} onClick={saveHandler} />
				</div>
			</div>
			<TotalAmount />
		</div>
	);
});
