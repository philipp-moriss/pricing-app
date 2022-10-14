import Avatar from '@mui/material/Avatar';
import ava from 'assets/images/avatar.png';
import { observer } from 'mobx-react-lite';
import React from 'react';
import AuthStore from 'store/AuthStore';

import { useResizeWindow } from '../../../../utils/hooks/useCustomNav';
import styles from './main-header.module.scss';

interface MainHeaderProps {
	toggleSideBar: boolean;
	setToggleSideBar: (value: boolean) => void;
}

const MainHeader = observer(({ toggleSideBar, setToggleSideBar }: MainHeaderProps) => {
	const { user } = AuthStore;
	const size = useResizeWindow();

	return (
		<div className={styles['main-header']}>
			<button
				className={`${styles['burger-button']} ${
					toggleSideBar ? styles['burger-button_position'] : ''
				}`}
				onClick={(): void => setToggleSideBar(!toggleSideBar)}
			>
				<span
					className={`${styles['burger-line']} ${toggleSideBar && styles['burger-line-active']}`}
				/>
			</button>
			<div className={styles['main-header_avatar-block']}>
				<Avatar alt="avatar" src={ava} sx={{ width: 44, height: 44 }} />
				{size.width > 900 && <span>{user ? user.email : 'No name'}</span>}
			</div>
		</div>
	);
});

export default MainHeader;
