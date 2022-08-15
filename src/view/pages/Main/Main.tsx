import MainHeader from '../../components/MainHeader/main-header';
import { SideBar } from '../../components/SIdeBar/side-bar';
import styles from './Main.module.scss';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

export const Main = (): React.ReactElement => {
	return (
		<>
			<MainHeader />
			<SideBar />
			<div className={styles['main']}>
				<div className={styles['main_content']}>
					<Outlet />
				</div>
			</div>
		</>
	);
};
