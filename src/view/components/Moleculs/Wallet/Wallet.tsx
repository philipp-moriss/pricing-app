import AddIcon from '@mui/icons-material/Add';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import { Chip, Fab, Tooltip } from '@mui/material';
import walletImages from 'assets/images/wallet.png';
import cs from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePrevious } from 'utils/utils';

import { WalletModelType } from '../../../../store/Type/models';
import { ChangeWalletModal } from '../Modals/ChangeWalletModal/ChangeWalletModal';
import { ExpenseAccountingModal } from '../Modals/ExpeneAccountingModal/ExpenseAccountingModal';
import styles from './Wallet.module.scss';

interface WalletProps {
	currentWallet: WalletModelType;
}

export const Wallet = observer(({ currentWallet }: WalletProps): React.ReactElement => {
	const [changeWalletModal, setChangeWalletModal] = useState(false);
	const [showExpenseAccountingModal, setExpenseAccountingModal] = useState(false);
	const { t } = useTranslation();
	const { balance, _id: walletId, name, currency, createdAt } = currentWallet;
	const prevBalance: number = usePrevious<number>(balance);
	const [activeChangeBalance, setActiveChangeBalance] = useState(false);
	useEffect(() => {
		if (prevBalance === undefined) return;
		if (prevBalance !== balance) {
			setActiveChangeBalance(true);
			setTimeout(() => {
				setActiveChangeBalance(false);
			}, 1000);
		}
	}, [prevBalance, balance]);
	return (
		<>
			<div className={styles['wallet']}>
				<div className={styles['wallet__wrapper']}>
					<div className={styles['wallet__body']}>
						<img src={walletImages} alt={'wallet-images'} />
						<div className={styles['wallet__body__items-wrappers']}>
							<div className={styles['wallet__body__item-wrapper']}>
								<span>{t('NAME')}:&nbsp;</span>
								<span className={cs(styles['wallet__value'], styles['wallet__value-out'])}>
									{name ?? t('EMPTY')}
								</span>
							</div>
							<div className={styles['wallet__body__item-wrapper']}>
								<span>{t('CURRENCY')}:&nbsp;</span>
								<span className={cs(styles['wallet__value'], styles['wallet__value-out'])}>
									{currency ?? t('EMPTY')}
								</span>
							</div>
						</div>
						{/*<div className={styles['wallet__body__item-wrapper']}>*/}
						{/*	<span>{t('CREATE_WALLET')}:&nbsp;</span>*/}
						{/*	<span className={cs(styles['wallet__value'])}>*/}
						{/*		{dateFormat(convertToDate(createdAt)) ?? t('EMPTY')}*/}
						{/*	</span>*/}
						{/*</div>*/}
					</div>
					<div className={styles['wallet__header']}>
						<Fab color="primary" aria-label="add" onClick={() => setExpenseAccountingModal(true)}>
							<AddIcon />
						</Fab>
						<div>
							<Chip
								label={`${t('BALANCE')} ${balance ?? t('EMPTY')}`}
								color={balance <= 0 ? 'warning' : 'secondary'}
							/>
						</div>
						<Fab color="primary" aria-label="add" onClick={(): void => setChangeWalletModal(true)}>
							<Tooltip title="Change wallet">
								<SettingsTwoToneIcon className={styles['wallet__body_ico']} />
							</Tooltip>
						</Fab>
					</div>
				</div>
			</div>
			{/*<TopCategories />*/}
			{changeWalletModal && (
				<ChangeWalletModal
					currentWallet={currentWallet}
					closeCallback={(): void => setChangeWalletModal(false)}
				/>
			)}
			{showExpenseAccountingModal && (
				<ExpenseAccountingModal walletId={walletId} onClose={setExpenseAccountingModal} />
			)}
		</>
	);
});
