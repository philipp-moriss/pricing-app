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

export const SideBar = observer((): React.ReactElement => {
	const { goTo } = useCustomNavigate();
	return (
		<div className={styles['side-bar']}>
			<div className={styles['side-bar_container']}>
				<img className={styles['side-bar_logo']} src={logo} alt={'logo'} />
				<div className={styles['side-bar_ico-container']}>
					<WalletIcon onClick={(): void => goTo('/')} className={styles['side-bar_ico']} />
					<BagIcon className={styles['side-bar_ico']} />
					<ChartIcon className={styles['side-bar_ico']} />
					<PersonIcon
						onClick={(): void => goTo('/personal-cabinet')}
						className={styles['side-bar_ico']}
					/>
					<SettingIcon onClick={(): void => goTo('/setting')} className={styles['side-bar_ico']} />
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
});
