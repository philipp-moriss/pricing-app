import React from 'react';
import { SideBar } from '../../components/SIdeBar/side-bar';
import styles from './Main.module.scss';

export const Main = (): React.ReactElement => {
	return (
		<div className={styles['main']}>
			<div className={styles['main_container']}>
				<div className={styles['main-side-bar']}>
					<SideBar />
				</div>
			</div>
		</div>
	);
};
