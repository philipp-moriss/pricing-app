import { SelectChangeEvent } from '@mui/material/Select/SelectInput';import React from 'react';import { useTranslation } from 'react-i18next';import BaseStore from '../../../store/BaseStore/base-store';import CategoriesStore from '../../../store/CategoriesStore/categories-store';import WalletStore from '../../../store/WalletStore/wallet-store';import { useInput } from '../../../utils/utils';import { WalletsSelect } from '../Moleculs/WalletsSelect/WalletsSelect';import styles from './ChartInfo.module.scss';export const ChartInfo = (): React.ReactElement => {	const { setWalletChartId } = CategoriesStore;	const { wallets } = WalletStore;	const { setNotification } = BaseStore;	const selectWalletHandler = (event: SelectChangeEvent<string>): void => {		setWalletChartId(event.target.value).then((resp) => {			if (resp === 'ok') {				setNotification('success', true, t('THE_OPERATION_WAS_SUCCESSFUL'));			} else {				setNotification('error', true, resp);			}		});	};	const { t } = useTranslation();	const dateSelect = useInput('', { isEmpty: true });	return (		<div className={styles['chart-info']}>			<div className={styles['chart-info__wrapper']}>				<div className={styles['chart-info__body']}>					<div className={styles['chart-info__wallet-select']}>						<WalletsSelect							label={t('WALLET_SELECTION')}							wallets={wallets}							onChange={selectWalletHandler}						/>					</div>					{/*					<div className={styles['chart-info__wallet-select']}>						<CustomSelect							data={[								{ _id: '1', value: '2022' },								{ _id: '2', value: '2021' },								{ _id: '3', value: '2020' },								{									_id: '4',									value: '2019',								},								{ _id: '5', value: '2018' },								{ _id: '6', value: '2017' },							]}							label={'Выбор года'}							placeholder={'Выбрать нужный год для графика'}							value={dateSelect.value ?? ''}							error={dateSelect.isDirty && dateSelect.valid.isEmpty}							errorMessage={t('FIELD_IS_REQUIRED')}							onChange={(e): void => dateSelect.onChange(e)}							className={styles['chart-info__date-select']}						/>					</div>*/}				</div>			</div>		</div>	);};