import walletImages from 'assets/images/wallet.png';
import cs from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AuthStore from 'store/AuthStore';
import WalletStore from 'store/WalletStore';
import { convertToDate, dateFormat } from 'utils/utils';

import { ReactComponent as GarbageIcon } from '../../../../assets/icons/garbage.svg';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
import styles from './Wallet.module.scss';

interface WalletProps {
	name?: string;
	balance?: number;
	currency?: string;
	totalSpends?: number;
	idWallet: string;
	createDate: string;
}

export const Wallet = observer(
	({
		name,
		totalSpends,
		currency,
		balance,
		idWallet,
		createDate,
	}: WalletProps): React.ReactElement => {
		const [removeWalletModal, setRemoveWalletModal] = useState(false);
		const { removeWallet } = WalletStore;
		const { user } = AuthStore;
		const { t } = useTranslation();
		const removeWalletHandler = (): void => {
			if (user?._id) {
				removeWallet(user?._id, idWallet);
			}
		};
		return (
			<>
				<div className={styles['wallet']}>
					<div className={styles['wallet__wrapper']}>
						<div className={styles['wallet__body']}>
							<GarbageIcon
								onClick={(): void => setRemoveWalletModal(true)}
								className={styles['wallet__body_ico']}
							/>
							<div className={styles['wallet__body__item-wrapper']}>
								<span>{t('NAME')}:&nbsp;</span>
								<span className={cs(styles['wallet__value'], styles['wallet__value-out'])}>
									{name ?? t('EMPTY')}
								</span>
							</div>
							<div className={styles['wallet__body__item-wrapper']}>
								<span>{t('CURRENCY')}:&nbsp;</span>
								<span className={cs(styles['wallet__value'], styles['wallet__value-out'])}>
									{currency ?? t('EMPTY')}
								</span>
							</div>
							<div className={styles['wallet__body__item-wrapper']}>
								<span>{t('BALANCE')}:&nbsp;</span>
								<span className={cs(styles['wallet__value'], styles['wallet__value-out'])}>
									{balance ?? t('EMPTY')}
								</span>
							</div>
							<div className={styles['wallet__body__item-wrapper']}>
								<span>{t('CREATE_WALLET')}:&nbsp;</span>
								<span className={cs(styles['wallet__value'])}>
									{dateFormat(convertToDate(createDate)) ?? t('EMPTY')}
								</span>
							</div>
						</div>
						<img src={walletImages} alt={'wallet-images'} />
					</div>
				</div>
				{removeWalletModal && (
					<ModalWrapper
						callBackSave={removeWalletHandler}
						closeCallback={(): void => setRemoveWalletModal(false)}
					>
						<div>{t('DO_YOU_REALLY_WANT_DELETE_YOUR_WALLET')}</div>
					</ModalWrapper>
				)}
			</>
		);
	},
);
