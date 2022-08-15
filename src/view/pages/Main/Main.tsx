import MainHeader from '../../components/MainHeader/main-header';
import { SideBar } from '../../components/SIdeBar/side-bar';
import styles from './Main.module.scss';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const Main = (): React.ReactElement => {
	const location = useLocation();
	return (
		<>
			<MainHeader />
			<SideBar />
			<div className={styles['main']}>
				<div className={styles['main_content']}>
					<TransitionGroup>
						<CSSTransition
							timeout={{ enter: 750, exit: 150 }}
							key={location.pathname}
							classNames={'fade'}
							unmountOnExit
						>
							<div className={styles['main_content__page']}>
								<Outlet />
							</div>
						</CSSTransition>
					</TransitionGroup>
				</div>
			</div>
		</>
	);
};
