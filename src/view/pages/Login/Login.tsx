import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../src/view/components/Button/Button';
import { CustomLink } from '../../../../src/view/components/Link/Link';
import { Title } from '../../../../src/view/components/Title/Title';
import AuthStore from '../../../store/auth-store';
import styles from './Login.module.scss';
import logo from '../../../assets/logo/logo-pony-web.svg';

export const Login = (): React.ReactElement => {
	const [data, setData] = useState({
		name: '',
		password: '',
	});
	const navigate = useNavigate();
	const logInHandler = (): void => {
		if (data.name && data.password) {
			AuthStore.setAuthStorage(data);
			navigate('/');
		} else {
			alert('Empty field');
		}
	};
	return (
		<div className={styles['container']}>
			<img className={styles['logo']} src={logo} alt={'logo'} />
			<div className={styles['login']}>
				<Title title={'Login'} size={'h1'} className={styles['login-title']} />
				<div className={styles['login-input-block']}>
					<input
						onChange={(e): void => setData({ ...data, name: e.currentTarget.value })}
						placeholder={'Email'}
						type="text"
						value={data.name}
					/>
					<input
						value={data.password}
						onChange={(e): void => setData({ ...data, password: e.currentTarget.value })}
						placeholder={'Password'}
						type={'text'}
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
