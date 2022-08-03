import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../src/view/components/Button/Button';
import { CustomLink } from '../../../../src/view/components/Link/Link';
import { Title } from '../../../../src/view/components/Title/Title';
import AuthStore from '../../../store/auth-store';
import styles from './Login.module.scss';

export const Login = () => {
	const [data, setData] = useState({
		login: '',
		password: '',
	});
	const navigate = useNavigate();
	const logInHandler = () => {
		if (data.login && data.password) {
			AuthStore.setAuthStorage(data);
			navigate('/');
		} else {
			alert('Empty field');
		}
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
						value={data.password}
						onChange={(e) => setData({ ...data, password: e.currentTarget.value })}
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
