import React from 'react';
import { useTranslation } from 'react-i18next';
import WalletStore from 'store/WalletStore/wallet-store';

import AuthStore from '../../../../../store/AuthStore/auth-store';
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
	const { getWallets, addWallet, allCurrencyList } = WalletStore;
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
			getWallets(user._id);
		});
		onClose(false);
	};
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
					placeholder={'Name wallet'}
					value={name.value}
					error={name.isDirty && name.valid.isEmpty}
					errorMessage={t('FIELD_IS_REQUIRED')}
					onChange={(e): void => name.onChange(e)}
					onBlur={(e): void => name.onBlur(e as unknown as FocusEvent)}
				/>
				<CustomInput
					type={'text'}
					placeholder={'Balance for wallet'}
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
					data={allCurrencyList ?? []}
					error={currency.isDirty && currency.valid.isEmpty}
					placeholder={'Currency selection'}
					errorMessage={t('FIELD_IS_REQUIRED')}
				/>
			</div>
		</ModalWrapper>
	);
};
