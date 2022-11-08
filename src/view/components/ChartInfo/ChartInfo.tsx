import { Checkbox } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

import CategoriesStore from '../../../store/CategoriesStore/categories-store';
import WalletStore from '../../../store/WalletStore/wallet-store';
import { WalletsSelect } from '../Moleculs/WalletsSelect/WalletsSelect';
import styles from './ChartInfo.module.scss';

// checkBox and categories
export const ChartInfo = observer((): React.ReactElement => {
	const { categories, selectedСategories, setSelectedСategories } = CategoriesStore;
	const { wallets } = WalletStore;
	const selectWalletHandler = (event: SelectChangeEvent<string>): void => {
		console.log(event);
	};
	console.log(selectedСategories);
	return (
		<div className={styles['chart-info']}>
			<div className={styles['chart-info__wrapper']}>
				<div>
					<WalletsSelect wallets={wallets} onChange={selectWalletHandler} />
					{categories.map((category) => {
						const checkBoxHandler = (): void => {
							setSelectedСategories(category.value);
						};
						return (
							<div key={category._id}>
								<Checkbox onClick={checkBoxHandler} />
								<span>{category.value}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
});
