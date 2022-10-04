import { ReactComponent as ArrowSortIcon } from 'assets/icons/arrow-sort.svg';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import WalletStore from 'store/WalletStore';
import { convertToDate, dateFormat } from 'utils/utils';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './ExpenseTable.module.scss';

export const ExpenseTable = observer((): React.ReactElement => {
	const {
		wallets,
		selectedWalletHistory,
		getCurrentHistory,
		clearSelectedWalletHistory,
		sortSelectedWalletHistory,
	} = WalletStore;
	const { t } = useTranslation();
	const [sortField, setSortField] = useState({
		name: '',
		isUpDirection: false,
	});
	const sortHandler = (field: string, activeProp: boolean): void => {
		setSortField((prev) => ({
			...prev,
			name: field,
			isUpDirection: !activeProp,
		}));
	};
	useEffect(() => {
		sortSelectedWalletHistory(sortField.name, sortField.isUpDirection);
	}, [sortField.isUpDirection]);
	useEffect(() => {
		return () => {
			clearSelectedWalletHistory();
		};
	}, []);
	return (
		<div className={styles['expense-table']}>
			<div className={styles['expense-table__wrapper']}>
				<div className={styles['expense-table__section-title']}>
					<Title title={t('HISTORY_SPENDS')} size={'h3'} />
					<div className={styles['expense-table__section-title__section-select']}>
						<div>{t('SELECT_A_WALLET_TO_VIEW_THE_HISTORY')}</div>
						<select
							onChange={(e): void => {
								if (!e.currentTarget.value) {
									return clearSelectedWalletHistory();
								}
								getCurrentHistory(e.currentTarget.value);
							}}
						>
							<option value={''}>Chose wallet</option>
							{wallets?.map((wallet) => {
								return (
									<option key={wallet._id} value={wallet._id}>
										{wallet.name}
									</option>
								);
							})}
						</select>
					</div>
				</div>
				<div className={styles['expense-table__spend-block']}>
					<div className={styles['expense-table__sort-history']}>
						<div className={styles['expense-table__sort-history_category']}>
							{t('CATEGORY')}
							<ArrowSortIcon
								className={`${
									sortField.name === 'category' && sortField.isUpDirection ? styles['sort-on'] : ''
								}`}
								onClick={(): void =>
									sortHandler(
										'category',
										sortField.name === 'category' ? sortField.isUpDirection : false,
									)
								}
							/>
						</div>
						<div className={styles['expense-table__sort-history_date']}>
							{t('DATE')}
							<ArrowSortIcon
								className={`${
									sortField.name === 'date' && sortField.isUpDirection ? styles['sort-on'] : ''
								}`}
								onClick={(): void =>
									sortHandler('date', sortField.name === 'date' ? sortField.isUpDirection : false)
								}
							/>
						</div>
						<div className={styles['expense-table__sort-history_amount']}>
							{t('AMOUNT')}
							<ArrowSortIcon
								className={`${
									sortField.name === 'amount' && sortField.isUpDirection ? styles['sort-on'] : ''
								}`}
								onClick={(): void =>
									sortHandler(
										'amount',
										sortField.name === 'amount' ? sortField.isUpDirection : false,
									)
								}
							/>
						</div>
					</div>
				</div>
				<div className={styles['expense-table__body']}>
					{selectedWalletHistory &&
						selectedWalletHistory.map((history, index) => {
							return (
								<div
									key={`${history._id}-${index}-${history.amount}`}
									className={styles['expense-table__spend-card']}
								>
									<span className={styles['expense-table__spend-card_category']}>
										{history.title}
									</span>
									<span className={styles['expense-table__spend-card_date']}>
										{dateFormat(convertToDate(history.createdAt))}
									</span>
									<span className={styles['expense-table__spend-card_amount']}>
										{history.amount}
									</span>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
});
