import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInput } from 'utils/utils';

import logo from '../../../assets/logo/logo-pony-web.svg';
import Button from '../../components/Atoms/Button/Button';
import { CustomInput } from '../../components/Atoms/CustomInput/CustomInput';
import { CustomLink } from '../../components/Atoms/Link/Link';
import { Title } from '../../components/Atoms/Title/Title';
import styles from './ForgotPassword.module.scss';

export const ForgotPassword = (): React.ReactElement => {
	const { t } = useTranslation();
	const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true });

	const sendEmailHandler = (): void => {
		console.log(email);
	};
	return (
		<div className={styles['container']}>
			<img className={styles['logo']} src={logo} alt={'logo'} />
			<div className={styles['forgot-password']}>
				<Title
					title={t('PASSWORD_RETRIEVAL')}
					size={'h1'}
					className={styles['forgot-password-title']}
				/>
				<div className={styles['forgot-password-input-block']}>
					<CustomInput
						onChange={(e): void => email.onChange(e)}
						onBlur={(e): void => email.onBlur(e as unknown as FocusEvent)}
						placeholder={t('EMAIL')}
						type={'text'}
						value={email.value}
						error={email.isDirty && email.valid.emailError}
						errorMessage={<span>Incorrect email </span>}
					/>
				</div>
				<div className={styles['forgot-password-btn-block']}>
					<Button disabled={email.isDirty && email.valid.emailError} onClick={sendEmailHandler}>
						{t('SEND')}
					</Button>
				</div>
				<div className={styles['forgot-password-link']}>
					<CustomLink
						className={styles['forgot-password-link_link']}
						to={'/login'}
						linkText={t('GO_BACK')}
					/>
				</div>
			</div>
		</div>
	);
};
