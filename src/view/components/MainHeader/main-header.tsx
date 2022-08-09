import React from 'react';
import styles from './main-header.module.scss';
import ava from '../../../assets/image/itachi.png';
import AuthStore from '../../../store/auth-store';
import { observer } from 'mobx-react-lite';

const MainHeader = observer(() => {
	const { userInfo } = AuthStore;
	console.log(userInfo);
	return (
		<div className={styles['main-header']}>
			<div className={styles['main-header_avatar-block']}>
				<img src={ava} alt={'avatar'} />
				<span>{userInfo ? userInfo.name : 'No name'}</span>
			</div>
		</div>
	);
});

export default MainHeader;
