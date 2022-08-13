import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../../components/MainHeader/main-header';
import { SideBar } from '../../components/SIdeBar/side-bar';
import styles from './Main.module.scss';

export const Main = (): React.ReactElement => {
	const [show, setShow] = useState(true);
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
{
	/*			{show && (
				<ModalWrapper
					closeCallback={(): void => setShow(false)}
					callBack={(): void => setShow(false)}
				>
					<h1>Hello</h1>
				</ModalWrapper>
			)}*/
}
