import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { NewUserType } from 'store/Type/models';
import { useInput } from 'utils/utils';
import { Button } from 'view/components/UiComponent/Button/Button';
import { CustomInput } from 'view/components/UiComponent/CustomInput/CustomInput';
import { CustomLink } from 'view/components/UiComponent/Link/Link';
import { Title } from 'view/components/UiComponent/Title/Title';

import logo from '../../../assets/logo/logo-pony-web.svg';
import AuthStore from '../../../store/AuthStore';
import styles from './NewUser.module.scss';

export const NewUser = (): React.ReactElement => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true });
	const password = useInput('', { isEmpty: true, minLength: 6 });
	const name = useInput('', { isEmpty: true });
	const lastName = useInput('', { isEmpty: true });

	const logInHandler = (): void => {
		AuthStore.registration({
			email: email.value,
			name: name.value,
			lastName: lastName.value,
			password: password.value,
		});
		alert('GOOD : ), This will take you to the Login page ');
		navigate('/login');
	};
	return (
		<div className={styles['container']}>
			<img className={styles['logo']} src={logo} alt={'logo'} />
			<div className={styles['login']}>
				<Title title={t('NEW_USER')} size={'h1'} className={styles['login-title']} />
				<div className={styles['login-input-block']}>
					<CustomInput
						type={'text'}
						value={name.value}
						placeholder={t('NAME')}
						onChange={(e): void => name.onChange(e)}
						onBlur={(e): void => name.onBlur(e as unknown as FocusEvent)}
						error={name.isDirty && name.valid.isEmpty}
						errorMessage={<span>Field is required</span>}
					/>
					<CustomInput
						placeholder={t('LAST_NAME')}
						type={'text'}
						value={lastName.value}
						onChange={(e): void => lastName.onChange(e)}
						onBlur={(e): void => lastName.onBlur(e as unknown as FocusEvent)}
					/>
					<CustomInput
						placeholder={t('EMAIL')}
						type={'text'}
						value={email.value}
						onChange={(e): void => email.onChange(e)}
						onBlur={(e): void => email.onBlur(e as unknown as FocusEvent)}
						error={email.isDirty && email.valid.emailError}
						errorMessage={<span>Incorrect email </span>}
					/>
					<CustomInput
						placeholder={t('PASSWORD')}
						type={'text'}
						value={password.value}
						onChange={(e): void => password.onChange(e)}
						onBlur={(e): void => password.onBlur(e as unknown as FocusEvent)}
						error={password.isDirty && password.valid.minLengthError}
						errorMessage={<span>Password too little</span>}
					/>
				</div>
				<Button
					disabled={
						(password.isDirty && password.valid.minLengthError) ||
						(email.isDirty && email.valid.emailError) ||
						(name.isDirty && name.valid.isEmpty)
					}
					onClick={logInHandler}
					textBtn={t('LOG_IN')}
				/>
				<div className={styles['login-link']}>
					<CustomLink className={styles['login-link_link']} to={'/login'} linkText={t('GO_BACK')} />
				</div>
			</div>
		</div>
	);
};
