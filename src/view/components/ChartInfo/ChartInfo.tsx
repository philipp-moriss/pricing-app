import { Checkbox } from '@mui/material';import { SelectChangeEvent } from '@mui/material/Select/SelectInput';import { observer } from 'mobx-react-lite';import React from 'react';import { useTranslation } from 'react-i18next';import CategoriesStore from '../../../store/CategoriesStore/categories-store';import WalletStore from '../../../store/WalletStore/wallet-store';import { WalletsSelect } from '../Moleculs/WalletsSelect/WalletsSelect';import styles from './ChartInfo.module.scss';export const ChartInfo = observer((): React.ReactElement => {	const { categories, selectedСategories, setSelectedСategories, setWalletChartId } =		CategoriesStore;	const { wallets } = WalletStore;	const selectWalletHandler = (event: SelectChangeEvent<string>): void => {		setWalletChartId(event.target.value);	};	const { t } = useTranslation();	return (		<div className={styles['chart-info']}>			<div className={styles['chart-info__wrapper']}>				<div>					<WalletsSelect						placeholder={t('WALLET_SELECTION')}						wallets={wallets}						onChange={selectWalletHandler}					/>					{categories.map((category) => {						const checkBoxHandler = (): void => {							setSelectedСategories(category.value);						};						return (							<div key={category._id}>								<Checkbox onClick={checkBoxHandler} />								<span>{category.value}</span>							</div>						);					})}				</div>			</div>		</div>	);});