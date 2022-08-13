import { observer } from 'mobx-react-lite';
import React from 'react';

import ava from '../../../assets/images/itachi.png';
import AuthStore from '../../../store/auth-store';
import styles from './main-header.module.scss';

const MainHeader = observer(() => {
	const { userInfo } = AuthStore;
	console.log(userInfo);
	return (
		<div className={styles['main-header']}>
			<div className={styles['main-header_avatar-block']}>
				<img src={ava} alt={'avatar'} />
				<span>{userInfo ? userInfo.email : 'No name'}</span>
			</div>
		</div>
	);
});

export default MainHeader;
