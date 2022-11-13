import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import { Tooltip } from '@mui/material';
import walletImages from 'assets/images/wallet.png';
import cs from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { convertToDate, dateFormat, usePrevious } from 'utils/utils';

import { WalletModelType } from '../../../../store/Type/models';
import { ChangeWalletModal } from '../Modals/ChangeWalletModal/ChangeWalletModal';
import styles from './Wallet.module.scss';

interface WalletProps {
	currentWallet: WalletModelType;
}

export const Wallet = observer(({ currentWallet }: WalletProps): React.ReactElement => {
	const [changeWalletModal, setChangeWalletModal] = useState(false);
	const { t } = useTranslation();
	const { balance, _id: idWallet, name, currency, createdAt } = currentWallet;
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
						<Tooltip title="Change wallet">
							<SettingsTwoToneIcon
								className={styles['wallet__body_ico']}
								onClick={(): void => setChangeWalletModal(true)}
							/>
						</Tooltip>
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
						<div className={styles['wallet__body__item-wrapper']}>
							<span>{t('BALANCE')}:&nbsp;</span>
							<span
								className={cs(
									styles['wallet__value'],
									styles['wallet__value-out'],
									activeChangeBalance && styles['wallet__value-background'],
								)}
							>
								{balance ?? t('EMPTY')}
							</span>
						</div>
						<div className={styles['wallet__body__item-wrapper']}>
							<span>{t('CREATE_WALLET')}:&nbsp;</span>
							<span className={cs(styles['wallet__value'])}>
								{dateFormat(convertToDate(createdAt)) ?? t('EMPTY')}
							</span>
						</div>
					</div>
					<img src={walletImages} alt={'wallet-images'} />
				</div>
			</div>
			{/*<TopCategories />*/}
			{changeWalletModal && (
				<ChangeWalletModal
					currentWallet={currentWallet}
					closeCallback={(): void => setChangeWalletModal(false)}
				/>
			)}
		</>
	);
});
