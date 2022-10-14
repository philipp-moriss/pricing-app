import { ReactComponent as BagIcon } from 'assets/icons/bag.svg';
import { ReactComponent as ChartIcon } from 'assets/icons/chart.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/log-out.svg';
import { ReactComponent as SettingIcon } from 'assets/icons/setting.svg';
import { ReactComponent as WalletIcon } from 'assets/icons/wallet.svg';
import React from 'react';
import { useCustomNavigate } from 'utils/hooks/useCustomNav';

import styles from './MobileBar.module.scss';

interface MobileBarProps {
	setExitModal: (value: boolean) => void;
}
export const MobileBar = ({ setExitModal }: MobileBarProps): React.ReactElement => {
	const { goTo } = useCustomNavigate();
	const navigateHandler = (to: string): void => {
		goTo(to);
		return;
	};
	return (
		<div className={`${styles['mobile-bar']}`}>
			<div className={styles['mobile-bar_container']}>
				<div className={styles['mobile-bar_ico-container']}>
					<WalletIcon
						onClick={(): void => navigateHandler('/')}
						className={styles['mobile-bar_ico']}
					/>

					<BagIcon
						onClick={(): void => navigateHandler('/work-space')}
						className={styles['mobile-bar_ico']}
					/>

					<ChartIcon className={styles['mobile-bar_ico']} />

					<SettingIcon
						onClick={(): void => navigateHandler('/settings')}
						className={styles['mobile-bar_ico']}
					/>
					<LogoutIcon onClick={(): void => setExitModal(true)} />
				</div>
			</div>
		</div>
	);
};
