import { ReactComponent as ArrowSortIcon } from 'assets/icons/arrow-sort.svg';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import WalletStore from 'store/WalletStore';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './ExpenseTable.module.scss';

export const ExpenseTable = observer((): React.ReactElement => {
	const { wallet } = WalletStore;
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
	/*useEffect(() => {
		wallet?.history &&
			wallet.history.sort((a, b) => {
				if (sortField.name === 'category') {
					if (a.category.label > b.category.label) {
						return sortField.isUpDirection ? -1 : 1;
					}
					return sortField.isUpDirection ? 1 : -1;
				}
				if (sortField.name === 'amount') {
					if (a.amount > b.amount) {
						return sortField.isUpDirection ? -1 : 1;
					}
					return sortField.isUpDirection ? 1 : -1;
				}
				if (sortField.name === 'date') {
					if (a.date > b.date) {
						return sortField.isUpDirection ? -1 : 1;
					}
					return sortField.isUpDirection ? 1 : -1;
				}
				return 0;
			});
	}, [sortField.isUpDirection]);*/

	return (
		<div className={styles['expense-table']}>
			<div className={styles['expense-table__wrapper']}>
				<Title title={'History spend'} size={'h3'} />
				<div className={styles['expense-table__spend-block']}>
					<div className={styles['expense-table__sort-history']}>
						<div className={styles['expense-table__sort-history_category']}>
							Category
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
							Date
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
							Amount
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
					{wallet?.history &&
						wallet.history.map((history, index) => {
							return (
								<div
									key={`${history._id}-${index}-${history.amount}`}
									className={styles['expense-table__spend-card']}
								>
									<span className={styles['expense-table__spend-card_category']}>
										{history.title}
									</span>
									<span className={styles['expense-table__spend-card_date']}>
										{history.date.toString()}
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
