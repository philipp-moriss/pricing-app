import walletImages from 'assets/images/wallet.png';
import { observer } from 'mobx-react-lite';
import React from 'react';
import WalletStore from 'store/WalletStore';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './TotalAmount.module.scss';

export const TotalAmount = observer((): React.ReactElement => {
		const { wallet } = WalletStore;
		console.log(wallet.myCategories);
		return (
			<div className={styles['total-amount']}>
				<div className={styles['total-amount__wrapper']}>
					<Title size={'h3'}>
						<div className={styles['total-amount__title-block']}>
							Balance: <span>{wallet?.account ?? 'Empty'}</span>
						</div>
					</Title>
					<img src={walletImages} alt={'wallet-images'} />
				</div>
			</div>
		);
	},
);
