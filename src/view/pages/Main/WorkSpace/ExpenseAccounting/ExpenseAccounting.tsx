import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AuthStore from 'store/AuthStore';
import CategoriesStore from 'store/CategoriesStore';
import WalletStore from 'store/WalletStore';
import { Autosuggest } from 'view/components/UiComponent/Autosuggest/Autosuggest';
import { Button } from 'view/components/UiComponent/Button/Button';
import { CustomInput } from 'view/components/UiComponent/CustomInput/CustomInput';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './ExpenseAccounting.module.scss';

export const ExpenseAccounting = observer((): React.ReactElement => {
	const { t } = useTranslation();
	const { categories } = CategoriesStore;
	const { addSpending, wallets } = WalletStore;
	const { user } = AuthStore;
	/*	const [spendData, setSpendData] = useState<MyCategoriesType>({
		amount: null as unknown as number,
		date: dateFormat(new Date()),
		time: getDateFormatTime(new Date()),
		category: {
			value: v1(),
			label: '',
		},
	});*/
	const [spendData, setSpendData] = useState({
		userId: user?._id,
		walletId: '',
		spending: {
			title: '',
			description: '',
			amount: '',
		},
	});
	const saveHandler = (): void => {
		addSpending(spendData);
	};

	return (
		<div className={styles['expense-accounting']}>
			<div className={styles['expense-accounting__wrapper']}>
				<div className={styles['expense-accounting__body']}>
					<Title title={t('WHERE_DID_YOU_MONEY_TODAY')} size={'h3'} />
					<Autosuggest
						label={t('CATEGORY_SELECTION')}
						options={categories}
						callBack={(value): void => {
							setSpendData({
								...spendData,
								spending: { ...spendData.spending, title: value.label },
							});
						}}
					/>
					<CustomInput
						label={t('THE_AMOUNT_YOU_SPEND')}
						type={'number'}
						value={spendData.spending.amount ?? ''}
						onChange={(e): void =>
							setSpendData({
								...spendData,
								spending: { ...spendData.spending, amount: e.currentTarget.value },
							})
						}
					/>
					<span style={{ marginBottom: '5px' }}>{t('SELECT_A_WALLET')}</span>
					<select
						onChange={(e): void => {
							setSpendData({
								...spendData,
								walletId: e.currentTarget.value,
							});
						}}
					>
						{wallets?.map((wallet) => {
							return (
								<option key={wallet._id} value={wallet._id}>
									{wallet.name}
								</option>
							);
						})}
					</select>
					<label style={{ marginBottom: '5px' }} htmlFor={'description'}>
						{t('ADD_COMMENT')}:
					</label>
					<textarea
						onChange={(e): void =>
							setSpendData({
								...spendData,
								spending: { ...spendData.spending, description: e.currentTarget.value },
							})
						}
						name={'description'}
						rows={5}
						cols={33}
					/>
					<Button textBtn={t('SAVE')} onClick={saveHandler} />
				</div>
			</div>
		</div>
	);
});
