import React, { useState } from 'react';
import { ModalWrapper } from '../../components/Modals/modal-wrapper';
import { SideBar } from '../../components/SIdeBar/side-bar';
import styles from './Main.module.scss';

export const Main = (): React.ReactElement => {
	const [show, setShow] = useState(true);
	return (
		<div className={styles['main']}>
			<div className={styles['main_container']}>
				<div className={styles['main-side-bar']}>
					<SideBar />
				</div>
			</div>
			{show && (
				<ModalWrapper
					closeCallback={() => setShow(false)}
					callBack={() => setShow(false)}
				>
					<h1>Hello</h1>
					<div>13141414141</div>
					<div>13141414141</div>
					<div>13141414141</div>
					<div>
						1314141314141414113 14141414113141 41414113141414141 13141414141131414 14141131414141411314 141414113141414141 1314141414114141
					</div>
				</ModalWrapper>
			)}
		</div>
	);
};
