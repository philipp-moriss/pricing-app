import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../src/view/components/Button/Button';
import { CustomLink } from '../../../../src/view/components/Link/Link';
import { Title } from '../../../../src/view/components/Title/Title';
import styles from './ForgotPassword.module.scss';
import logo from '../../../assets/image/logo-pony-web.svg';

export const ForgotPassword = () => {
	const [data, setData] = useState({
		email: '',
	});
	const navigate = useNavigate();
	const sendEmailHandler = () => {
		console.log(data);
	};
	return (
		<div className={styles['container']}>
			<img className={styles['logo']} src={logo} alt={'logo'} />
			<div className={styles['forgot-password']}>
				<Title title={'Login'} size={'h1'} className={styles['forgot-password-title']} />
				<div className={styles['forgot-password-input-block']}>
					<input
						onChange={(e) => setData({ email: e.currentTarget.value })}
						placeholder={'Email'}
						type="text"
						value={data.email}
					/>
				</div>
				<div className={styles['forgot-password-btn-block']}>
					<Button onClick={sendEmailHandler} textBtn={'Send'} />
				</div>
				<div className={styles['forgot-password-link']}>
					<CustomLink
						className={styles['forgot-password-link_link']}
						to={'/login'}
						linkText={'Go Back'}
					/>
				</div>
			</div>
		</div>
	);
};
