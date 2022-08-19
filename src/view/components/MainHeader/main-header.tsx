import ava from 'assets/images/itachi.png';
import { observer } from 'mobx-react-lite';
import React from 'react';
import AuthStore from 'store/AuthStore/auth-store';

import styles from './main-header.module.scss';

interface MainHeaderProps {
	toggleSideBar: boolean;
	setToggleSideBar: (value: boolean) => void;
}

const MainHeader = observer(({ toggleSideBar, setToggleSideBar }: MainHeaderProps) => {
	const { userInfo } = AuthStore;
	return (
		<div className={styles['main-header']}>
			<button
				className={styles['burger-button']}
				onClick={(): void => setToggleSideBar(!toggleSideBar)}
			>
				<span
					className={`${styles['burger-line']} ${toggleSideBar && styles['burger-line-active']}`}
				/>
			</button>
			<div className={styles['main-header_avatar-block']}>
				<img src={ava} alt={'avatar'} />
				<span>{userInfo ? userInfo.email : 'No name'}</span>
			</div>
		</div>
	);
});

export default MainHeader;
