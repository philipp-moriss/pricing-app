import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import AuthStore from 'store/AuthStore';
import CategoriesStore from 'store/CategoriesStore';
import { SpendDataType } from 'store/Type/models';
import WalletStore from 'store/WalletStore';
import { Autosuggest } from 'view/components/UiComponent/Autosuggest/Autosuggest';
import Button from 'view/components/UiComponent/Button/Button';
import { CustomInput } from 'view/components/UiComponent/CustomInput/CustomInput';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './ExpenseAccounting.module.scss';

export const ExpenseAccounting = observer((): React.ReactElement => {
	const { t } = useTranslation();
	const { categories } = CategoriesStore;
	const { addSpending, wallets } = WalletStore;
	const { user } = AuthStore;
	const { register, handleSubmit } = useForm();
	const [spendData, setSpendData] = useState<SpendDataType>({
		userId: user?._id,
		walletId: '',
		spending: {
			title: '',
			description: '',
			amount: '',
		},
	});
	const saveHandler = (): void => {
		if (spendData.spending.amount && spendData.walletId && spendData.spending.title) {
			addSpending(spendData);
		}
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
						register={{ ...register('amount', { required: true }) }}
						onChange={(e): void =>
							setSpendData({
								...spendData,
								spending: { ...spendData.spending, amount: e.currentTarget.value },
							})
						}
					/>
					<span style={{ marginBottom: '5px' }}>{t('SELECT_A_WALLET')}</span>
					<select
						{...register('walletId', { required: true })}
						onChange={(e): void => {
							setSpendData({
								...spendData,
								walletId: e.currentTarget.value,
							});
						}}
						value={spendData.walletId}
					>
						<option value={''}>Chose wallet</option>
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
						rows={3}
					/>
					<Button textBtn={t('SAVE')} onClick={saveHandler} />
				</div>
			</div>
		</div>
	);
});
