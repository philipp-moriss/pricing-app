import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCustomNavigate } from 'utils/hooks/useCustomNav';
import { useInput } from 'utils/utils';

import logo from '../../../assets/logo/logo-pony-web.svg';
import AuthStore from '../../../store/AuthStore';
import Button from '../../components/Atoms/Button/Button';
import { CustomInput } from '../../components/Atoms/CustomInput/CustomInput';
import { CustomLink } from '../../components/Atoms/Link/Link';
import { Title } from '../../components/Atoms/Title/Title';
import styles from './Register.module.scss';

export const Register = (): React.ReactElement => {
	const { t } = useTranslation();
	const { goTo } = useCustomNavigate();

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
		}).then((data) => {
			if (data) {
				goTo('/login');
			}
		});
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
						errorMessage={t('FIELD_IS_REQUIRED')}
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
						errorMessage={t('INCORRECT_EMAIL')}
					/>
					<CustomInput
						placeholder={t('PASSWORD')}
						type={'text'}
						value={password.value}
						onChange={(e): void => password.onChange(e)}
						onBlur={(e): void => password.onBlur(e as unknown as FocusEvent)}
						error={password.isDirty && password.valid.minLengthError}
						errorMessage={t('PASSWORD_TOO_LITTLE')}
					/>
				</div>
				<Button
					disabled={password.valid.minLengthError || email.valid.emailError || name.valid.isEmpty}
					onClick={logInHandler}
				>
					{t('LOG_IN')}
				</Button>
				<div className={styles['login-link']}>
					<CustomLink className={styles['login-link_link']} to={'/login'} linkText={t('GO_BACK')} />
				</div>
			</div>
		</div>
	);
};
