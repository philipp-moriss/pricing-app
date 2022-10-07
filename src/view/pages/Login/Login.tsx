import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BaseStore from 'store/BaseStore';
import { LoadingType } from 'store/Type/models';
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
	const { setIsLoading } = BaseStore;
	const { login } = AuthStore;
	const { goTo } = useCustomNavigate();
	const [data, setData] = useState({
		email: '',
		password: '',
	});
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const logInHandler = (): void => {
		if (data.email && data.password) {
			setIsLoading(LoadingType.fetching);
			login(data)
				.then(() => {
					goTo('/');
				})
				.finally(() => {
					setIsLoading(LoadingType.success);
				});
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
				<form onSubmit={handleSubmit(logInHandler)}>
					<div className={styles['login-input-block']}>
						<CustomInput
							onChange={(e): void => handlerData(e.currentTarget.value, 'email')}
							placeholder={t('EMAIL')}
							type={'text'}
							value={data.email}
							register={{ ...register('email', { required: true }) }}
						/>
						<CustomInput
							value={data.password}
							onChange={(e): void => handlerData(e.currentTarget.value, 'password')}
							placeholder={t('PASSWORD')}
							type={'text'}
							register={{ ...register('password', { required: true }) }}
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
				</form>
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
