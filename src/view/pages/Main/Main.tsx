import React from 'react';
import styles from './Main.module.scss';
import { SideBar } from '../../components/SIdeBar/side-bar';

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
