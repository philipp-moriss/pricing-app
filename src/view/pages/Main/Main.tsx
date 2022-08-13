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
					closeCallback={(): void => setShow(false)}
					callBack={(): void => setShow(false)}
				>
					<h1>Hello</h1>
				</ModalWrapper>
			)}
		</div>
	);
};
