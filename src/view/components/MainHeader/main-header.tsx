import React from 'react';
import styles from './main-header.module.scss';
import ava from '../../../assets/image/itachi.png';
import AuthStore from '../../../store/auth-store';

const MainHeader = () => {
	const { userInfo } = AuthStore;
	return (
		<div className={styles['main-header']}>
			<div className={styles['main-header_avatar-block']}>
				<img src={ava} alt={'avatar'} />
				<span>{userInfo ? userInfo.name : 'No name'}</span>
			</div>
		</div>
	);
};

export default MainHeader;
