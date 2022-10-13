import { MenuItem, OutlinedInput, Select, TextareaAutosize } from '@mui/material';
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
						placeholder={'amount'}
						value={spendData.spending.amount ?? ''}
						register={{ ...register('amount', { required: true }) }}
						onChange={(e): void =>
							setSpendData({
								...spendData,
								spending: { ...spendData.spending, amount: e.currentTarget.value },
							})
						}
					/>

					<div>
						<span>{t('SELECT_A_WALLET')}</span>
						<Select
							multiple={false}
							label={t('SELECT_A_WALLET')}
							value={spendData.walletId}
							onChange={(e): void => {
								setSpendData({
									...spendData,
									walletId: e.target.value,
								});
							}}
							input={<OutlinedInput fullWidth />}
						>
							{wallets &&
								wallets.map((wallet) => (
									<MenuItem key={wallet._id} value={wallet._id}>
										{wallet.name}
									</MenuItem>
								))}
						</Select>
					</div>

					<div className={styles['expense-accounting__body__wrapper']}>
						<label style={{ marginBottom: '5px' }} htmlFor={'description'}>
							{t('ADD_COMMENT')}:
						</label>
						<TextareaAutosize
							onChange={(e): void =>
								setSpendData({
									...spendData,
									spending: { ...spendData.spending, description: e.currentTarget.value },
								})
							}
							minRows={3}
							name={'description'}
						/>
					</div>

					<Button textBtn={t('SAVE')} onClick={saveHandler} />
				</div>
			</div>
		</div>
	);
});
