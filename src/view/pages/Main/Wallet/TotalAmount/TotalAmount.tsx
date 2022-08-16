import styles from './TotalAmount.module.scss';
import wallet from 'assets/images/wallet.png';
import React from 'react';
import { Title } from 'view/components/UiComponent/Title/Title';

export const TotalAmount = () => {
	return (
		<div className={styles['total-amount']}>
			<div className={styles['total-amount__wrapper']}>
				<Title size={'h3'}>
					<div className={styles['total-amount__title-block']}>
						Balance: <span>134141</span>
					</div>
				</Title>
				<img src={wallet} alt={'wallet-images'} />
			</div>
		</div>
	);
};
