import AuthStore from '../../../store/AuthStore';
import styles from './PersonalCabinet.module.scss';
import { observer } from 'mobx-react-lite';
import React from 'react';

export const PersonalCabinet = observer((): React.ReactElement => {
	const { newUserInfo } = AuthStore;
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
