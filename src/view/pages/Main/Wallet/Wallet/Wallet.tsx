import walletImages from 'assets/images/wallet.png';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WalletStore from 'store/WalletStore';
import { ModalWrapper } from 'view/components/UiComponent/ModalWrapper/modal-wrapper';

import { ReactComponent as GarbageIcon } from '../../../../../assets/icons/garbage.svg';
import styles from './Wallet.module.scss';

interface WalletProps {
	name?: string;
	balance?: number;
	currency?: string;
	totalSpends?: number;
}

export const Wallet = observer(
	({ name, totalSpends, currency, balance }: WalletProps): React.ReactElement => {
		const [removeWalletModal, setRemoveWalletModal] = useState(false);
		const { removeWallet } = WalletStore;
		const { t } = useTranslation();
		const removeWalletHandler = (): void => {
			removeWallet('6328373deabd630db0d9d5ff', '632839a1eabd630db0d9d604');
		};
		return (
			<>
				<div className={styles['wallet']}>
					<div className={styles['wallet__wrapper']}>
						<div className={styles['wallet__body']}>
							<GarbageIcon
								onClick={() => setRemoveWalletModal(true)}
								className={styles['wallet__body_ico']}
							/>
							<div>
								<span>{t('NAME')}:&nbsp;</span>
								<span>{name ?? t('EMPTY')}</span>
							</div>
							<div>
								<span>{t('CURRENCY')}:&nbsp;</span>
								<span>{currency ?? t('EMPTY')}</span>
							</div>
							<div>
								<span>{t('BALANCE')}:&nbsp;</span>
								<span>{balance ?? t('EMPTY')}</span>
							</div>
							<div>
								<span>{t('EXPENSES')}:&nbsp;</span>
								<span>{totalSpends ?? t('EMPTY')}</span>
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
						<div>{t('DO_YOU_REALLY_WANT_TO_LEAVE_THE_SITE')}</div>
					</ModalWrapper>
				)}
			</>
		);
	},
);
