import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCustomNavigate } from 'utils/hooks/useCustomNav';

import { ReactComponent as BagIcon } from '../../../../assets/icons/bag.svg';
import { ReactComponent as ChartIcon } from '../../../../assets/icons/chart.svg';
import { ReactComponent as LogoutIcon } from '../../../../assets/icons/log-out.svg';
import { ReactComponent as SettingIcon } from '../../../../assets/icons/setting.svg';
import { ReactComponent as WalletIcon } from '../../../../assets/icons/wallet.svg';
import logo from '../../../../assets/logo/logo-pony-web.svg';
import styles from './SideBar.module.scss';

interface SideBarProps {
	toggleSideBar: boolean;
	setToggleSideBar: (value: boolean) => void;
	setExitModal: (value: boolean) => void;
}

export const SideBar = observer(
	({ toggleSideBar, setToggleSideBar, setExitModal }: SideBarProps): React.ReactElement => {
		const { goTo } = useCustomNavigate();
		const { t } = useTranslation();
		const navigateHandler = (to: string): void => {
			goTo(to);
			setToggleSideBar(false);
			return;
		};

		return (
			<div className={`${styles['side-bar']} ${!toggleSideBar ? styles['side-bar_hide'] : ''}`}>
				<div className={styles['side-bar_container']}>
					<img className={styles['side-bar_logo']} src={logo} alt={'logo'} />
					<div className={styles['side-bar_ico-container']}>
						<div onClick={(): void => navigateHandler('/')}>
							<WalletIcon className={styles['side-bar_ico']} />
							<span>{t('WALLET')}</span>
						</div>
						<div onClick={(): void => navigateHandler('/work-space')}>
							<BagIcon className={styles['side-bar_ico']} />
							<span>{t('WORK_SPACE')}</span>
						</div>
						<div>
							<ChartIcon
								onClick={(): void => navigateHandler('/chart-space')}
								className={styles['side-bar_ico']}
							/>
							<span>{t('CHARTS')}</span>
						</div>
						<div onClick={(): void => navigateHandler('/settings')}>
							<SettingIcon className={styles['side-bar_ico']} />
							<span>{t('SETTINGS')}</span>
						</div>
						<div onClick={(): void => setExitModal(true)}>
							<LogoutIcon className={styles['side-bar_ico']} />
							<span>{t('LOG_OUT')}</span>
						</div>
					</div>
				</div>
			</div>
		);
	},
);
