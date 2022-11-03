import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import WalletStore from 'store/WalletStore/wallet-store';

import AuthStore from '../../../../../store/AuthStore/auth-store';
import BaseStore from '../../../../../store/BaseStore/base-store';
import { useInput } from '../../../../../utils/utils';
import styles from '../../../../pages/Wallets/Wallets.module.scss';
import { CustomInput } from '../../../Atoms/CustomInput/CustomInput';
import { CustomSelect } from '../../../Atoms/Select/CustomSelect';
import { Title } from '../../../Atoms/Title/Title';
import { ModalWrapper } from '../../ModalWrapper/ModalWrapper';

type NewWalletModalType = {
	onClose: (value: boolean) => void;
};

export const NewWalletModal = ({ onClose }: NewWalletModalType): React.ReactElement => {
	const { getWallets, addWallet, allCurrencyList, getCurrencyList } = WalletStore;
	const { notification, switcherNotification, setNotification, serverResponse } = BaseStore;
	const { t } = useTranslation();
	const name = useInput('', { isEmpty: true });
	const balance = useInput('', { isEmpty: true });
	const currency = useInput('', { isEmpty: true });
	const { user } = AuthStore;
	const saveWallet = (): void => {
		addWallet({
			userId: user._id,
			name: name.value,
			balance: +balance.value,
			currency: currency.value,
		}).then(() => {
			setNotification('success', true, 'some eeeeee');
			getWallets(user._id);
		});
		onClose(false);
	};
	useEffect(() => {
		getCurrencyList();
	}, []);
	return (
		<ModalWrapper
			callBackSave={saveWallet}
			closeCallback={(): void => onClose(false)}
			textBtnDontSave={'NOT_SAVE'}
			textBtnSave={'SAVE'}
			disabledBtn={balance.valid.isEmpty || name.valid.isEmpty || currency.valid.isEmpty}
		>
			<div className={styles['wallets__wallet-modal']}>
				<Title size={'h1'}>{t('CREATE_A_NEW_WALLET')}</Title>
				<CustomInput
					type={'text'}
					placeholder={t('NAME_WALLET')}
					value={name.value}
					error={name.isDirty && name.valid.isEmpty}
					errorMessage={t('FIELD_IS_REQUIRED')}
					onChange={(e): void => name.onChange(e)}
					onBlur={(e): void => name.onBlur(e as unknown as FocusEvent)}
				/>
				<CustomInput
					type={'text'}
					placeholder={t('BALANCE_FOR_WALLET')}
					value={balance.value}
					error={balance.isDirty && balance.valid.isEmpty}
					errorMessage={t('FIELD_IS_REQUIRED')}
					onChange={(e): void => balance.onChange(e)}
					onBlur={(e): void => balance.onBlur(e as unknown as FocusEvent)}
				/>
				<CustomSelect
					onChange={(e): void => currency.onChange(e)}
					onBlur={(e): void => currency.onBlur(e as unknown as FocusEvent)}
					value={currency.value}
					label={t('CURRENCY_SELECTION')}
					data={allCurrencyList ?? []}
					error={currency.isDirty && currency.valid.isEmpty}
					errorMessage={t('FIELD_IS_REQUIRED')}
				/>
			</div>
		</ModalWrapper>
	);
};
