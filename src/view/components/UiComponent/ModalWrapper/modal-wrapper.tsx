import React, { useEffect } from 'react';import ReactDOM from 'react-dom';import { useTranslation } from 'react-i18next';import { Button } from '../Button/Button';import styles from './modal-wrapper.module.scss';interface DisconnectAllModalPropsType {	closeCallback: () => void;	callBackSave: () => void;	children: React.ReactNode;	textBtnSave?: string;	textBtnDontSave?: string;}export const ModalWrapper: React.FC<DisconnectAllModalPropsType> = ({	callBackSave,	closeCallback,	children,	textBtnSave,	textBtnDontSave,}) => {	const { t } = useTranslation();	useEffect(() => {		document.body.style.overflow = 'hidden';		return () => {			document.body.style.overflow = 'auto';		};	}, []);	const PortalNode = document.getElementById('portal');	return PortalNode		? ReactDOM.createPortal(				<div className={styles['modal-wrapper']}>					<div className={styles['modal-overflow']} onClick={closeCallback}></div>					<div className={styles['modal-inner']}>						<div className={styles['modal-content-container']}>{children}</div>						<div className={styles['modal-content-button-box']}>							<Button onClick={callBackSave} textBtn={t(textBtnSave ?? 'YES')} />							<Button onClick={closeCallback} textBtn={t(textBtnDontSave ?? 'NO')} />						</div>					</div>				</div>,				PortalNode,		  )		: null;};