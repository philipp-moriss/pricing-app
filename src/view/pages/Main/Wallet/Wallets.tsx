import React from 'react';import { Wallet } from 'view/pages/Main/Wallet/Wallet/Wallet';import styles from './Wallets.module.scss';export const Wallets = (): React.ReactElement => {	return (		<div className={styles['wallets']}>			<Wallet />		</div>	);};// here will map of wallets