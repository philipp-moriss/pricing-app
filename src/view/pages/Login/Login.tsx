import logo from '../../../assets/logo/logo-pony-web.svg';
import AuthStore from '../../../store/AuthStore/auth-store';
import { Button } from '../../components/UiComponent/Button/Button';
import { CustomInput } from '../../components/UiComponent/CustomInput/CustomInput';
import { CustomLink } from '../../components/UiComponent/Link/Link';
import { Title } from '../../components/UiComponent/Title/Title';
import styles from './Login.module.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = (): React.ReactElement => {
	const [data, setData] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();
	const logInHandler = (): void => {
		if (data.email && data.password) {
			const userData = JSON.parse(localStorage.getItem('new-user-data') as string);
			if (userData.password === data.password && data.email === userData.email) {
				AuthStore.setAuthStorage(data);
				navigate('/');
			} else {
				alert('Wrong login or password');
			}
		} else {
			alert('Empty field');
		}
	};
	const handlerData = (value: string, key: string): void => {
		setData((prevState) => {
			return {
				...prevState,
				[key]: value,
			};
		});
	};
	return (
		<div className={styles['container']}>
			<img className={styles['logo']} src={logo} alt={'logo'} />
			<div className={styles['login']}>
				<Title title={'Login'} size={'h1'} className={styles['login-title']} />
				<div className={styles['login-input-block']}>
					<CustomInput
						onChange={(e): void => handlerData(e.currentTarget.value, 'email')}
						placeholder={'Email'}
						type="text"
						value={data.email}
					/>
					<CustomInput
						value={data.password}
						onChange={(e): void => handlerData(e.currentTarget.value, 'password')}
						placeholder={'Password'}
						type={'text'}
					/>
				</div>
				<div className={styles['login-btn-block']}>
					<Button onClick={logInHandler} textBtn={'Log in'} />
					<Button
						onClick={(): void => {
							navigate('/new-user');
						}}
						textBtn={'New user'}
					/>
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
