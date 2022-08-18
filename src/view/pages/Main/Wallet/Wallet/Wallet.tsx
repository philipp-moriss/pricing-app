import walletImages from 'assets/images/wallet.png';
import { observer } from 'mobx-react-lite';
import React from 'react';
import WalletStore from 'store/WalletStore';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './Wallet.module.scss';

export const Wallet = observer((): React.ReactElement => {
	const { wallet } = WalletStore;

	return (
		<div className={styles['wallet']}>
			<div className={styles['wallet__wrapper']}>
				<Title size={'h3'}>
					<div className={styles['wallet__title-block']}>
						<div>
							<span>Name:&nbsp;</span>
							<span>{wallet?.name ?? 'Empty'}</span>
						</div>
						<div>
							<span>Currency:&nbsp;</span>
							<span>{wallet?.currentCurrency}</span>
						</div>
						<div>
							<span>Balance:&nbsp;</span>
							<span>{wallet?.account ?? 'Empty'}</span>
						</div>
						<div>
							<span>Expenses:&nbsp;</span>
							<span>{wallet?.totalSpends ?? 'Empty'}</span>
						</div>
					</div>
				</Title>
				<img src={walletImages} alt={'wallet-images'} />
			</div>
		</div>
	);
});
