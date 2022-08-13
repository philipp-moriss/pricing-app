import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../src/view/components/Button/Button';
import { CustomLink } from '../../../../src/view/components/Link/Link';
import { Title } from '../../../../src/view/components/Title/Title';
import logo from '../../../assets/logo/logo-pony-web.svg';
import styles from './ForgotPassword.module.scss';

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
