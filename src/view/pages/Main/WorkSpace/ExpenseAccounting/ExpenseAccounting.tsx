import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CategoriesStore from 'store/CategoriesStore';
import { MyCategoriesType } from 'store/Type/models';
import WalletStore from 'store/WalletStore';
import { dateFormat, getDateFormatTime } from 'utils/utils';
import { v1 } from 'uuid';
import { Autosuggest } from 'view/components/UiComponent/Autosuggest/Autosuggest';
import { Button } from 'view/components/UiComponent/Button/Button';
import { CustomInput } from 'view/components/UiComponent/CustomInput/CustomInput';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './ExpenseAccounting.module.scss';

export const ExpenseAccounting = observer((): React.ReactElement => {
	const { t } = useTranslation();
	const { categories } = CategoriesStore;
	const { addSpend } = WalletStore;
	const [spendData, setSpendData] = useState<MyCategoriesType>({
		amount: null as unknown as number,
		date: dateFormat(new Date()),
		time: getDateFormatTime(new Date()),
		category: {
			value: v1(),
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
			/*	addSpend(spendData);*/
		} else {
			alert(t('FIELDS_CANNOT_BE_EMPTY'));
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
							setSpendData({ ...spendData, category: value });
						}}
					/>
					<CustomInput
						label={t('THE_AMOUNT_YOU_SPEND')}
						type={'number'}
						value={spendData.amount ?? ''}
						onChange={(e): void => spendHandler(e)}
					/>
					<Button textBtn={t('SAVE')} onClick={saveHandler} />
				</div>
			</div>
		</div>
	);
});
