import walletImages from 'assets/images/wallet.png';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import WalletStore from 'store/WalletStore';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './Wallet.module.scss';

export const Wallet = observer((): React.ReactElement => {
	const { wallet, getWallet } = WalletStore;
	const { t } = useTranslation();
	useEffect(() => {
		getWallet('2');
	}, []);
	return (
		<div className={styles['wallet']}>
			<div className={styles['wallet__wrapper']}>
				<Title size={'h3'}>
					<div className={styles['wallet__title-block']}>
						<div>
							<span>{t('NAME')}:&nbsp;</span>
							<span>{wallet?.name ?? t('EMPTY')}</span>
						</div>
						<div>
							<span>{t('CURRENCY')}:&nbsp;</span>
							<span>{wallet?.currency ?? t('EMPTY')}</span>
						</div>
						<div>
							<span>{t('BALANCE')}:&nbsp;</span>
							<span>{wallet?.balance ?? t('EMPTY')}</span>
						</div>
						<div>
							<span>{t('EXPENSES')}:&nbsp;</span>
							<span>{wallet?.totalSpends ?? t('EMPTY')}</span>
						</div>
					</div>
				</Title>
				<img src={walletImages} alt={'wallet-images'} />
			</div>
		</div>
	);
});
