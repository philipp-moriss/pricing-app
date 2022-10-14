import {
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
	TextareaAutosize,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, ChangeEventHandler, TextareaHTMLAttributes, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import AuthStore from 'store/AuthStore';
import CategoriesStore from 'store/CategoriesStore';
import { SpendDataType } from 'store/Type/models';
import WalletStore from 'store/WalletStore';

import Button from '../../Atoms/Button/Button';
import { CustomInput } from '../../Atoms/CustomInput/CustomInput';
import { CustomSelect } from '../../Atoms/Select/CustomSelect';
import { CustomTextArea } from '../../Atoms/TextArea/TextArea';
import { Title } from '../../Atoms/Title/Title';
import { WalletsSelect } from '../WalletsSelect/WalletsSelect';
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

	const onchangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>): void =>
		setSpendData({
			...spendData,
			spending: { ...spendData.spending, description: event.currentTarget.value },
		});

	const onchangeSelectAreaHandler = (event: SelectChangeEvent<string>): void => {
		setSpendData({
			...spendData,
			spending: { ...spendData.spending, title: event.target.value },
		});
	};

	const onchangeInputAreaHandler = (event: ChangeEvent<HTMLInputElement>): void =>
		setSpendData({
			...spendData,
			spending: { ...spendData.spending, amount: event.currentTarget.value },
		});

	return (
		<div className={styles['expense-accounting']}>
			<div className={styles['expense-accounting__wrapper']}>
				<div className={styles['expense-accounting__body']}>
					<Title title={t('WHERE_DID_YOU_MONEY_TODAY')} size={'h3'} />
					<CustomSelect
						data={categories}
						label={spendData.spending.title}
						value={spendData.spending.title}
						onChange={onchangeSelectAreaHandler}
					/>
					<CustomInput
						label={t('THE_AMOUNT_YOU_SPEND')}
						type={'number'}
						placeholder={'amount'}
						value={spendData.spending.amount ?? ''}
						register={{ ...register('amount', { required: true }) }}
						onChange={onchangeInputAreaHandler}
					/>
					<div>
						<WalletsSelect
							wallets={wallets}
							onChange={(e): void => {
								setSpendData({
									...spendData,
									walletId: e.target.value,
								});
							}}
						/>
					</div>
					<div className={styles['expense-accounting__body__wrapper']}>
						<CustomTextArea
							label={t('ADD_COMMENT')}
							onChange={onchangeTextAreaHandler}
							name={'description'}
						/>
					</div>
					<Button onClick={saveHandler}>{t('SAVE')}</Button>
				</div>
			</div>
		</div>
	);
});
