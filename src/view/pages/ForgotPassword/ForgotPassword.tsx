import logo from '../../../assets/logo/logo-pony-web.svg';
import { Button } from '../../components/UiComponent/Button/Button';
import { CustomLink } from '../../components/UiComponent/Link/Link';
import { Title } from '../../components/UiComponent/Title/Title';
import styles from './ForgotPassword.module.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = (): React.ReactElement => {
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
				<Title title={'Forgot password'} size={'h1'} className={styles['forgot-password-title']} />
				<div className={styles['forgot-password-input-block']}>
					<input
						onChange={(e): void => setData({ email: e.currentTarget.value })}
						placeholder={'Email'}
						type="text"
						value={data.email}
					/>
				</div>
				<div className={styles['forgot-password-btn-block']}>
					<Button onClick={sendEmailHandler} textBtn={'Send'} />
				</div>
				<div className={styles['forgot-password-link']}>
					<CustomLink
						className={styles['forgot-password-link_link']}
						to={'/login'}
						linkText={'Go back'}
					/>
				</div>
			</div>
		</div>
	);
};
