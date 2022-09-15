import walletImages from 'assets/images/wallet.png';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './Wallet.module.scss';

interface WalletProps {
	name?: string;
	balance?: number;
	currency?: string;
	totalSpends?: number;
}

export const Wallet = observer(
	({ name, totalSpends, currency, balance }: WalletProps): React.ReactElement => {
		const { t } = useTranslation();
		return (
			<div className={styles['wallet']}>
				<div className={styles['wallet__wrapper']}>
					<Title size={'h3'}>
						<div className={styles['wallet__title-block']}>
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
					</Title>
					<img src={walletImages} alt={'wallet-images'} />
				</div>
			</div>
		);
	},
);
