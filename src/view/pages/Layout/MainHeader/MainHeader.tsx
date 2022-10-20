import { Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ava from 'assets/images/avatar.png';
import cs from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { MouseEventHandler } from 'react';
import AuthStore from 'store/AuthStore';

import { useResizeWindow } from '../../../../utils/hooks/useCustomNav';
import styles from './MainHeader.module.scss';

interface MainHeaderProps {
	toggleSideBar: boolean;
	logOutHandler: () => void;
	setToggleSideBar: (value: boolean) => void;
}

const MainHeader = observer(
	({ toggleSideBar, setToggleSideBar, logOutHandler }: MainHeaderProps) => {
		const { user } = AuthStore;
		const size = useResizeWindow();
		const showAvatarMenu = size.width < 450;

		const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
		const open = Boolean(anchorEl);
		const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (showAvatarMenu) {
				setAnchorEl(event.currentTarget);
			}
		};
		const handleClose = () => {
			setAnchorEl(null);
		};
		const LogOut = () => {
			handleClose();
			logOutHandler();
		};

		return (
			<div className={styles['main-header']}>
				<div className={styles['main-header-container']}>
					<div
						className={cs([styles['burger'], { [styles['burger_position']]: toggleSideBar }])}
						onClick={(): void => setToggleSideBar(!toggleSideBar)}
					>
						<button className={styles['burger-button']}>
							<span
								className={`${styles['burger-line']} ${
									toggleSideBar && styles['burger-line-active']
								}`}
							/>
						</button>
					</div>
					<div className={styles['main-header_avatar-block']}>
						<Avatar onClick={handleClick} alt="avatar" src={ava} sx={{ width: 44, height: 44 }} />
						{size.width > 900 && <span>{user ? user.email : 'No name'}</span>}
						{showAvatarMenu && (
							<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
								<MenuItem onClick={LogOut}>Logout</MenuItem>
							</Menu>
						)}
					</div>
				</div>
			</div>
		);
	},
);

export default MainHeader;
