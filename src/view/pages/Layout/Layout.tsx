import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import AuthStore from '../../../store/AuthStore';
import { useCustomNavigate } from '../../../utils/hooks/useCustomNav';
import { ModalWrapper } from '../../components/Moleculs/ModalWrapper/ModalWrapper';
import styles from './Layout.module.scss';
import MainHeader from './MainHeader/MainHeader';
import { MobileBar } from './MobileBar/MobileBar';
import { SideBar } from './SIdeBar/SideBar';

export const Layout = (): React.ReactElement => {
	const location = useLocation();
	const { logOutUser } = AuthStore;
	const { t } = useTranslation();
	const [toggleSideBar, setToggleSideBar] = useState<boolean>(false);
	const [exitModal, setExitModal] = useState(false);
	const { goTo } = useCustomNavigate();
	const logOutHandler = (): void => {
		setExitModal(false);
		logOutUser();
		goTo('/');
	};
	return (
		<>
			<MainHeader toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} />
			<SideBar
				setExitModal={setExitModal}
				toggleSideBar={toggleSideBar}
				setToggleSideBar={setToggleSideBar}
			/>
			<MobileBar setExitModal={setExitModal} />
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
			{exitModal && (
				<ModalWrapper callBackSave={logOutHandler} closeCallback={(): void => setExitModal(false)}>
					<div>{t('DO_YOU_REALLY_WANT_TO_LEAVE_THE_SITE')}</div>
				</ModalWrapper>
			)}
		</>
	);
};
