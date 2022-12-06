import { Pagination } from '@mui/material';
import addImg from 'assets/images/add-circle.png';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import WalletStore from 'store/WalletStore/wallet-store';
import { useResizeWindow } from 'utils/hooks/useCustomNav';
import { ExpenseAccounting } from 'view/components/Moleculs/ExpenseAccounting/ExpenseAccounting';
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
	const hiddenSpendingMenu = size.width < 900;
	const [currentPage, setCurrentPage] = useState(1);
	const [showAddWalletModal, setShowAddWalletModal] = useState(false);
	const [showExpenseAccountingModal, setExpenseAccountingModal] = useState(false);
	useEffect(() => {
		getWallets(user._id);
	}, []);

	const pageSize = 6;
	const lastIndex = currentPage * pageSize;
	const firstIndex = lastIndex - pageSize;
	const totalPages = Math.ceil(walletsCount / pageSize);

	const handleChangePagination = (event: React.ChangeEvent<unknown>, page: number): void => {
		setCurrentPage(page);
		window.scrollTo(0, 0);
	};
	return (
		<>
			<div className={styles['wallets']}>
				<div className={styles['wallets__header']}>
					<img
						className={styles['wallets__add-wallet-img']}
						src={addImg}
						onClick={(): void => setShowAddWalletModal(true)}
					/>
					{hiddenSpendingMenu && !!wallets?.length && (
						<div className={styles['wallets__btn-add-spending-block']}>
							<Button
								onClick={(): void => setExpenseAccountingModal(true)}
								className={styles['wallets__btn-add-spending-block__btn']}
							>
								{t('ADD_SPENDING')}
							</Button>
						</div>
					)}
				</div>
				<div className={styles['wallets__wallet-section']}>
					{wallets &&
						wallets.slice(firstIndex, lastIndex).map((wallet) => {
							return <Wallet key={wallet._id} currentWallet={wallet} />;
						})}

					{totalPages ? (
						<Pagination
							count={totalPages ?? 0}
							page={currentPage}
							onChange={handleChangePagination}
						/>
					) : (
						''
					)}
				</div>
				{!hiddenSpendingMenu && !!wallets?.length && <ExpenseAccounting />}
			</div>
			{showAddWalletModal && <NewWalletModal onClose={setShowAddWalletModal} />}
			{showExpenseAccountingModal && <ExpenseAccountingModal onClose={setExpenseAccountingModal} />}
		</>
	);
});
