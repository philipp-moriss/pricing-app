import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BaseStore from 'store/NotificationStore';
import { LoadingEnum } from 'store/Type/models';
import { useCustomNavigate } from 'utils/hooks/useCustomNav';
import { useInput } from 'utils/utils';

import logo from '../../../assets/logo/logo-pony-web.svg';
import AuthStore from '../../../store/AuthStore/auth-store';
import Button from '../../components/Atoms/Button/Button';
import { CustomInput } from '../../components/Atoms/CustomInput/CustomInput';
import { CustomLink } from '../../components/Atoms/Link/Link';
import { Title } from '../../components/Atoms/Title/Title';
import styles from './Login.module.scss';

export const Login = (): React.ReactElement => {
	const { t } = useTranslation();
	const { setIsLoading } = BaseStore;
	const { login } = AuthStore;
	const { goTo } = useCustomNavigate();
	const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true });
	const password = useInput('', { isEmpty: true, minLength: 6 });

	const navigate = useNavigate();
	const logInHandler = async (): Promise<void> => {
		setIsLoading(LoadingEnum.fetching);
		try {
			await login({ email: email.value ?? '', password: password.value ?? '' });
			goTo('/');
		} finally {
			setIsLoading(LoadingEnum.success);
		}
	};
	return (
		<div className={styles['container']}>
			<img className={styles['logo']} src={logo} alt={'logo'} />
			<div className={styles['login']}>
				<Title title={t('LOGIN')} size={'h1'} className={styles['login__title']} />
				<div className={styles['login-input-block']}>
					<CustomInput
						onChange={(e): void => email.onChange(e)}
						onBlur={(e): void => email.onBlur(e as unknown as FocusEvent)}
						placeholder={t('EMAIL')}
						type={'text'}
						value={email.value ?? ''}
						error={email.isDirty && email.valid.emailError}
						errorMessage={t('INCORRECT_EMAIL')}
					/>
					<CustomInput
						value={password.value ?? ''}
						onChange={(e): void => password.onChange(e)}
						onBlur={(e): void => password.onBlur(e as unknown as FocusEvent)}
						placeholder={t('PASSWORD')}
						type={'password'}
						error={password.isDirty && password.valid.minLengthError}
						errorMessage={t('PASSWORD_TOO_LITTLE')}
					/>
				</div>
				<div className={styles['login-btn-block']}>
					<Button
						disabled={password.valid.minLengthError || email.valid.emailError}
						onClick={logInHandler}
					>
						{t('LOG_IN')}
					</Button>
					<Button
						onClick={(): void => {
							navigate('/new-user');
						}}
					>
						{t('NEW_USER')}
					</Button>
					<GoogleLogin
						onSuccess={(credentialResponse) => {
							console.log(credentialResponse);
						}}
						onError={() => {
							console.log('Login Failed');
						}}
						useOneTap
					/>
				</div>
				<div className={styles['login__link_block']}>
					{/*<CustomLink
						className={styles['login__link']}
						to={'/forgot-password'}
						linkText={t('FORGOT_YOUR_PASSWORD')}
					/>*/}
					<CustomLink className={styles['login__link']} to={'/'} linkText={t('GO_TO_HOME_PAGE')} />
				</div>
			</div>
		</div>
	);
};
