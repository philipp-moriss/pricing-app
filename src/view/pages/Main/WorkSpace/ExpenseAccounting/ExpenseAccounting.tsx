import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import CategoriesStore from 'store/CategoriesStore';
import { MyCategoriesType } from 'store/Type/models';
import WalletStore from 'store/WalletStore';
import { dateFormat, getDateFormatTime, getUniqueId } from 'utils/utils';
import { Autosuggest } from 'view/components/UiComponent/Autosuggest/Autosuggest';
import { Button } from 'view/components/UiComponent/Button/Button';
import { CustomInput } from 'view/components/UiComponent/CustomInput/CustomInput';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './ExpenseAccounting.module.scss';

export const ExpenseAccounting = observer((): React.ReactElement => {
	const { categories } = CategoriesStore;
	const { addSpend } = WalletStore;
	const [spendData, setSpendData] = useState<MyCategoriesType>({
		amount: null as unknown as number,
		date: dateFormat(new Date()),
		time: getDateFormatTime(new Date()),
		category: {
			value: getUniqueId(),
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
		if (spendData.category.label && spendData.amount) {
			addSpend(spendData);
		} else {
			alert('Fields cannot be empty ');
		}
	};

	return (
		<div className={styles['expense-accounting']}>
			<div className={styles['expense-accounting__wrapper']}>
				<div className={styles['expense-accounting__body']}>
					<Title title={'Where did you spend your money today'} size={'h3'} />
					<Autosuggest
						label={'Category selection'}
						options={categories}
						callBack={(value): void => {
							setSpendData({ ...spendData, category: value });
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
		</div>
	);
});
