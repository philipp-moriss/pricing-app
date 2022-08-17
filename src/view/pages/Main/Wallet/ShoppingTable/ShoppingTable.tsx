import { ReactComponent as ArrowSortIcon } from 'assets/icons/arrow-sort.svg';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import WalletStore from 'store/WalletStore';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './ShoppingTable.module.scss';

export const ShoppingTable = observer((): React.ReactElement => {
	const { wallet } = WalletStore;
	const [sortField, setSortField] = useState({
		name: '',
		isUpDirection: false,
	});
	const sortHandler = (field: string, activeProp: boolean) => {
		setSortField((prev) => ({
			...prev,
			name: field,
			isUpDirection: !activeProp,
		}));
	};
	useEffect(() => {
		wallet.myCategories?.sort((a, b) => {
			if (sortField.name === 'category') {
				if (a.categories.label > b.categories.label) {
					return sortField.isUpDirection ? 1 : -1;
				}
				return sortField.isUpDirection ? -1 : 1;
			}
			if (sortField.name === 'amount') {
				if (a.amount > b.amount) {
					return sortField.isUpDirection ? 1 : -1;
				}
				return sortField.isUpDirection ? -1 : 1;
			}
			return 0;
		});
	}, [sortField.isUpDirection]);
	return (
		<div className={styles['shop-table']}>
			<div className={styles['shop-table__wrapper']}>
				<Title title={'History spend'} size={'h3'} />
				<div className={styles['shop-table__spend-block']}>
					<div className={styles['shop-table__sort-history']}>
						<div className={styles['shop-table__sort-history_category']}>
							Category
							<ArrowSortIcon
								className={`${sortField.name === 'category' ? styles['sort-on'] : ''}`}
								onClick={() => sortHandler('category', sortField.isUpDirection)}
							/>
						</div>
						<div className={styles['shop-table__sort-history_date']}>
							Date
							<ArrowSortIcon
								className={`${sortField.name === 'date' ? styles['sort-on'] : ''}`}
								onClick={() => sortHandler('date', sortField.isUpDirection)}
							/>
						</div>
						<div className={styles['shop-table__sort-history_amount']}>
							Amount
							<ArrowSortIcon
								className={`${sortField.name === 'amount' ? styles['sort-on'] : ''}`}
								onClick={() => sortHandler('amount', sortField.isUpDirection)}
							/>
						</div>
					</div>
					<div>
						{wallet.myCategories.map((category) => {
							return (
								<div key={category.categories.value} className={styles['shop-table__spend-card']}>
									<span className={styles['shop-table__spend-card_category']}>
										{category.categories.label}
									</span>
									<span className={styles['shop-table__spend-card_date']}>2022/07/02</span>
									<span className={styles['shop-table__spend-card_amount']}>{category.amount}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
});
