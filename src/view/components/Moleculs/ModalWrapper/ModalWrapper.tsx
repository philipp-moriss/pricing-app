import React, { useEffect } from 'react';import ReactDOM from 'react-dom';import { useTranslation } from 'react-i18next';import Button from '../../Atoms/Button/Button';import styles from './ModalWrapper.module.scss';interface DisconnectAllModalPropsType {	closeCallback: () => void;	callBackSave: () => void;	children: React.ReactNode;	textBtnSave?: string;	textBtnDontSave?: string;}export const ModalWrapper: React.FC<DisconnectAllModalPropsType> = ({	callBackSave,	closeCallback,	children,	textBtnSave,	textBtnDontSave,}) => {	const { t } = useTranslation();	useEffect(() => {		document.body.style.overflow = 'hidden';		return () => {			document.body.style.overflow = 'auto';		};	}, []);	const PortalNode = document.getElementById('portal');	return PortalNode		? ReactDOM.createPortal(				<div className={styles['modal-wrapper']}>					<div className={styles['modal-overflow']} onClick={closeCallback}></div>					<div className={styles['modal-inner']}>						<div className={styles['modal-content-container']}>{children}</div>						<div className={styles['modal-content-button-box']}>							<Button onClick={callBackSave}>{t(textBtnSave ?? 'YES')}</Button>							<Button onClick={closeCallback}>{t(textBtnDontSave ?? 'NO')}</Button>						</div>					</div>				</div>,				PortalNode,		  )		: null;};