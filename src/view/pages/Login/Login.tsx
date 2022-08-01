import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../src/view/components/Button/Button';
import { CustomLink } from '../../../../src/view/components/Link/Link';
import { Title } from '../../../../src/view/components/Title/Title';
import styles from './Login.module.scss';

export const Login = () => {
	const [data, setData] = useState({
		login: '',
		passport: '',
	});
	const navigate = useNavigate();
	const logInHandler = () => {
		localStorage.setItem('auth', JSON.stringify(true));
		localStorage.setItem('userData', JSON.stringify(data));
		navigate('/');
	};
	return (
		<div className={styles['container']}>
			<div className={styles['login']}>
				<Title title={'Login'} size={'h1'} className={styles['login-title']} />
				<div className={styles['login-input-block']}>
					<input
						onChange={(e) => setData({ ...data, login: e.currentTarget.value })}
						placeholder={'Email'}
						type="text"
						value={data.login}
					/>
					<input
						value={data.passport}
						onChange={(e) => setData({ ...data, passport: e.currentTarget.value })}
						placeholder={'Password'}
						type="text"
					/>
				</div>
				<div className={styles['login-btn-block']}>
					<Button onClick={logInHandler} textBtn={'Log in'} />
					<Button textBtn={'New user'} />
				</div>
				<div className={styles['login-link']}>
					<CustomLink
						className={styles['login-link_link']}
						to={'/forgot-password'}
						linkText={'Forgot your password?'}
					/>
				</div>
			</div>
		</div>
	);
};
