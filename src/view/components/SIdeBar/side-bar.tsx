import React from 'react';
import styles from './side-bar.module.scss';
import { Button } from '../Button/Button';
import AuthStore from '../../../store/auth-store';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import logo from '../../../assets/image/logo-pony-web.svg';


export const SideBar = observer(() => {
	const navigate = useNavigate();
	return (
		<div className={styles['side-bar']}>
			<div className={styles['side-bar_container']}>
				<img className={styles['side-bar_logo']} src={logo} alt={'logo'} />
				<Button
					className={styles['side-bar_logOut']}
					onClick={() => {
						AuthStore.removeAuth();
						navigate('/');
					}}
					textBtn={'Log out'}
				/>
			</div>
		</div>
	);
});
