import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import WalletStore from 'store/WalletStore/wallet-store';
import { useResizeWindow } from 'utils/hooks/useCustomNav';
import { Wallet } from 'view/components/Moleculs/Wallet/Wallet';

import AuthStore from '../../../store/AuthStore/auth-store';
import Button from '../../components/Atoms/Button/Button';
import { ExpenseAccountingModal } from '../../components/Moleculs/Modals/ExpeneAccountingModal/ExpenseAccountingModal';
import { NewWalletModal } from '../../components/Moleculs/Modals/NewWalletModal/NewWalletModal';
import styles from './Wallets.module.scss';

export const Wallets = observer((): React.ReactElement => {
	const size = useResizeWindow();
	const { t } = useTranslation();
	const { getWallets, wallets, walletsCount } = WalletStore;
	const { user } = AuthStore;
	const [showAddWalletModal, setShowAddWalletModal] = useState(false);
	useEffect(() => {
		getWallets(user._id);
	}, []);

	if (wallets?.length < 0) {
		return <div>Loding</div>;
	}

	return (
		<>
			<div className={styles['wallets']}>
				<div className={styles['wallets__header']}>
					<Button
						onClick={(): void => setShowAddWalletModal(true)}
						size={'large'}
						className={styles['wallets__btn-add-spending-block__btn']}
					>
						Add Wallet
					</Button>
				</div>
				<div className={styles['wallets__wallet-section']}>
					{wallets &&
						wallets.map((wallet) => {
							return <Wallet key={wallet._id} currentWallet={wallet} />;
						})}
				</div>
			</div>
			{showAddWalletModal && <NewWalletModal onClose={setShowAddWalletModal} />}
		</>
	);
});
