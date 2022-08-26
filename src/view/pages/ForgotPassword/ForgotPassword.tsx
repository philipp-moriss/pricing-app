import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomInput } from 'view/components/UiComponent/CustomInput/CustomInput';

import logo from '../../../assets/logo/logo-pony-web.svg';
import { Button } from '../../components/UiComponent/Button/Button';
import { CustomLink } from '../../components/UiComponent/Link/Link';
import { Title } from '../../components/UiComponent/Title/Title';
import styles from './ForgotPassword.module.scss';

export const ForgotPassword = (): React.ReactElement => {
	const { t } = useTranslation();
	const [data, setData] = useState({
		email: '',
	});
	const sendEmailHandler = (): void => {
		console.log(data);
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
						onChange={(e): void => setData({ email: e.currentTarget.value })}
						placeholder={t('EMAIL')}
						type={'text'}
						value={data.email}
					/>
				</div>
				<div className={styles['forgot-password-btn-block']}>
					<Button onClick={sendEmailHandler} textBtn={t('SEND')} />
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
