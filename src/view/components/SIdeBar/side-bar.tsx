import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { ReactComponent as BagIcon } from '../../../assets/icons/bag.svg';
// @ts-ignore
import { ReactComponent as ChartIcon } from '../../../assets/icons/chart.svg';
// @ts-ignore
import { ReactComponent as LogoutIcon } from '../../../assets/icons/log-out.svg';
// @ts-ignore
import { ReactComponent as PersonIcon } from '../../../assets/icons/person.svg';
// @ts-ignore
import { ReactComponent as SettingIcon } from '../../../assets/icons/setting.svg';
import logo from '../../../assets/image/logo-pony-web.svg';
import AuthStore from '../../../store/auth-store';
import styles from './side-bar.module.scss';

export const SideBar = observer(() => {
	const navigate = useNavigate();
	return (
		<div className={styles['side-bar']}>
			<div className={styles['side-bar_container']}>
				<img className={styles['side-bar_logo']} src={logo} alt={'logo'} />
				<div className={styles['side-bar_ico-container']}>
					<BagIcon className={styles['side-bar_ico']} />
					<ChartIcon className={styles['side-bar_ico']} />
					<PersonIcon className={styles['side-bar_ico']} />
					<SettingIcon className={styles['side-bar_ico']} />
				</div>

				<LogoutIcon
					onClick={() => {
						AuthStore.removeAuth();
						navigate('/');
					}}
					className={styles['side-bar_ico-logout']}
				/>
			</div>
		</div>
	);
});
