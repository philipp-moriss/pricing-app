import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthStore from '../../../store/auth-store';
import styles from './PersonalCabinet.module.scss';

export const PersonalCabinet = observer((): React.ReactElement => {
	const navigate = useNavigate();
	const { newUserInfo } = AuthStore;
	console.log(newUserInfo);
	return (
		<div className={styles['personal-cabinet']}>
			<div className={styles['personal-cabinet__wrapper']}>
				<div className={styles['personal-cabinet__body']}>
					<h1>Your personal data</h1>
					<div className={styles['personal-cabinet__block-text']}>
						<span>Email:</span>
						<span className={styles['personal-cabinet__body_text']}>{newUserInfo?.email}</span>
					</div>
					<div className={styles['personal-cabinet__block-text']}>
						<span>Name:</span>
						<span className={styles['personal-cabinet__body_text']}>{newUserInfo?.name}</span>
					</div>
					<div className={styles['personal-cabinet__block-text']}>
						<span>Last name:</span>
						<span className={styles['personal-cabinet__body_text']}>{newUserInfo?.lastName}</span>
					</div>
					<div className={styles['personal-cabinet__block-text']}>
						<span>Сurrent currency:</span>
						<span className={styles['personal-cabinet__body_text']}>1313131</span>
					</div>
				</div>
			</div>
		</div>
	);
});
