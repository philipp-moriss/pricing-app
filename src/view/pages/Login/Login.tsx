import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCustomNavigate } from 'utils/hooks/useCustomNav';
import { Button } from 'view/components/UiComponent/Button/Button';
import { CustomInput } from 'view/components/UiComponent/CustomInput/CustomInput';
import { CustomLink } from 'view/components/UiComponent/Link/Link';
import { Title } from 'view/components/UiComponent/Title/Title';

import logo from '../../../assets/logo/logo-pony-web.svg';
import AuthStore from '../../../store/AuthStore/auth-store';
import styles from './Login.module.scss';

export const Login = (): React.ReactElement => {
	const { t } = useTranslation();
	const { login, getUser } = AuthStore;
	const { goTo } = useCustomNavigate();
	const [data, setData] = useState({
		email: '1@mail.ru',
		password: '1',
	});
	const navigate = useNavigate();
	const logInHandler = (): void => {
		if (data.email && data.password) {
			login(data).then(() => {
				goTo('/');
			});
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
				<Title title={t('LOGIN')} size={'h1'} className={styles['login-title']} />
				<div className={styles['login-input-block']}>
					<CustomInput
						onChange={(e): void => handlerData(e.currentTarget.value, 'email')}
						placeholder={t('EMAIL')}
						type={'text'}
						value={data.email}
					/>
					<CustomInput
						value={data.password}
						onChange={(e): void => handlerData(e.currentTarget.value, 'password')}
						placeholder={t('PASSWORD')}
						type={'text'}
					/>
				</div>
				<div className={styles['login-btn-block']}>
					<Button onClick={logInHandler} textBtn={t('LOG_IN')} />
					<Button
						onClick={(): void => {
							navigate('/new-user');
						}}
						textBtn={t('NEW_USER')}
					/>
				</div>
				<div className={styles['login__link_block']}>
					<CustomLink
						className={styles['login__link']}
						to={'/forgot-password'}
						linkText={t('FORGOT_YOUR_PASSWORD')}
					/>
					<CustomLink className={styles['login__link']} to={'/'} linkText={t('GO_TO_HOME_PAGE')} />
				</div>
			</div>
		</div>
	);
};
