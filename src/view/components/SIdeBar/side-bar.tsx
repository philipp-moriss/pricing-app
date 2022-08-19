import { observer } from 'mobx-react-lite';
import React from 'react';
import { useCustomNavigate } from 'utils/hooks/useCustomNav';

import { ReactComponent as BagIcon } from '../../../assets/icons/bag.svg';
import { ReactComponent as ChartIcon } from '../../../assets/icons/chart.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/icons/log-out.svg';
import { ReactComponent as PersonIcon } from '../../../assets/icons/person.svg';
import { ReactComponent as SettingIcon } from '../../../assets/icons/setting.svg';
import { ReactComponent as WalletIcon } from '../../../assets/icons/wallet.svg';
import logo from '../../../assets/logo/logo-pony-web.svg';
import AuthStore from '../../../store/AuthStore';
import styles from './side-bar.module.scss';

interface SideBarProps {
	toggleSideBar: boolean;
	setToggleSideBar: (value: boolean) => void;
}

export const SideBar = observer(
	({ toggleSideBar, setToggleSideBar }: SideBarProps): React.ReactElement => {
		const { goTo } = useCustomNavigate();

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
						<div>
							<WalletIcon
								onClick={(): void => navigateHandler('/')}
								className={styles['side-bar_ico']}
							/>
							<span>Wallet</span>
						</div>
						<div>
							<BagIcon
								onClick={(): void => navigateHandler('/work-space')}
								className={styles['side-bar_ico']}
							/>
							<span>Work space</span>
						</div>
						<div>
							<ChartIcon className={styles['side-bar_ico']} />
							<span>Charts</span>
						</div>
						<div>
							<PersonIcon
								onClick={(): void => navigateHandler('/personal-cabinet')}
								className={styles['side-bar_ico']}
							/>
							<span>Personal cabinet</span>
						</div>
						<div>
							<SettingIcon className={styles['side-bar_ico']} />
							<span>Setting</span>
						</div>
					</div>

					<LogoutIcon
						onClick={(): void => {
							AuthStore.removeAuth();
							goTo('/');
						}}
						className={styles['side-bar_ico-logout']}
					/>
				</div>
			</div>
		);
	},
);
