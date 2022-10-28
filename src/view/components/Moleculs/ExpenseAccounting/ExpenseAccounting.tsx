import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthStore from 'store/AuthStore';
import CategoriesStore from 'store/CategoriesStore';
import WalletStore from 'store/WalletStore';
import { useInput } from 'utils/utils';

import Button from '../../Atoms/Button/Button';
import { CustomInput } from '../../Atoms/CustomInput/CustomInput';
import { CustomSelect } from '../../Atoms/Select/CustomSelect';
import { CustomTextArea } from '../../Atoms/TextArea/TextArea';
import { Title } from '../../Atoms/Title/Title';
import { WalletsSelect } from '../WalletsSelect/WalletsSelect';
import styles from './ExpenseAccounting.module.scss';

type ExpenseAccountingType = {
	onClose?: (value: boolean) => void;
};
export const ExpenseAccounting = observer(
	({ onClose }: ExpenseAccountingType): React.ReactElement => {
		const { t } = useTranslation();
		const { categories } = CategoriesStore;
		const { addSpending, wallets } = WalletStore;
		const { user } = AuthStore;

		const title = useInput('', { isEmpty: true });
		const amount = useInput('', { isEmpty: true });
		const walletId = useInput('', { isEmpty: true });
		const description = useInput('', {});

		const saveHandler = (): void => {
			addSpending({
				walletId: walletId.value,
				userId: user._id,
				spending: {
					title: title.value,
					description: description.value,
					amount: amount.value,
				},
			}).then(() => {
				onClose && onClose(false);
			});
		};

		return (
			<div className={styles['expense-accounting']}>
				<div className={styles['expense-accounting__wrapper']}>
					<div className={styles['expense-accounting__body']}>
						<Title title={t('WHERE_DID_YOU_MONEY_TODAY')} size={'h3'} />
						<CustomSelect
							data={categories}
							label={title.value}
							value={title.value}
							error={title.isDirty && title.valid.isEmpty}
							errorMessage={t('FIELD_IS_REQUIRED')}
							onChange={(e): void => title.onChange(e)}
							onBlur={(e): void => title.onBlur(e as unknown as FocusEvent)}
						/>
						<CustomInput
							label={t('THE_AMOUNT_YOU_SPEND')}
							type={'number'}
							placeholder={'amount'}
							value={amount.value}
							error={amount.isDirty && amount.valid.isEmpty}
							errorMessage={t('FIELD_IS_REQUIRED')}
							onChange={(e): void => amount.onChange(e)}
							onBlur={(e): void => amount.onBlur(e as unknown as FocusEvent)}
						/>
						<div>
							<WalletsSelect
								wallets={wallets}
								onChange={(e): void => walletId.onChange(e)}
								onBlur={(e): void => walletId.onBlur(e as unknown as FocusEvent)}
								value={walletId.value}
								error={walletId.isDirty && walletId.valid.isEmpty}
								errorMessage={t('FIELD_IS_REQUIRED')}
							/>
						</div>
						<div className={styles['expense-accounting__body__wrapper']}>
							<CustomTextArea
								label={t('ADD_COMMENT')}
								onChange={(e): void => description.onChange(e)}
								onBlur={(e): void => description.onBlur(e as unknown as FocusEvent)}
								value={description.value}
								name={'description'}
							/>
						</div>
						<Button
							disabled={title.valid.isEmpty || amount.valid.isEmpty || walletId.valid.isEmpty}
							onClick={saveHandler}
						>
							{t('SAVE')}
						</Button>
					</div>
				</div>
			</div>
		);
	},
);
