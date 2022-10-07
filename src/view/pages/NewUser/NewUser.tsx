import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { NewUserType } from 'store/Type/models';
import { Button } from 'view/components/UiComponent/Button/Button';
import { CustomInput } from 'view/components/UiComponent/CustomInput/CustomInput';
import { CustomLink } from 'view/components/UiComponent/Link/Link';
import { Title } from 'view/components/UiComponent/Title/Title';

import logo from '../../../assets/logo/logo-pony-web.svg';
import AuthStore from '../../../store/AuthStore';
import styles from './NewUser.module.scss';

export const NewUser = (): React.ReactElement => {
	const [data, setData] = useState<NewUserType>({
		name: '',
		email: '',
		lastName: '',
		password: '',
	});
	const { t } = useTranslation();
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const logInHandler = (): void => {
		if (data.name && data.password && data.lastName && data.email) {
			AuthStore.registration(data);
			alert('GOOD : ), This will take you to the Login page ');
			navigate('/login');
		}
	};
	const handlerData = (value: string, key: string): void => {
		setData((prevState: NewUserType) => {
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
				<Title title={t('NEW_USER')} size={'h1'} className={styles['login-title']} />
				<form onSubmit={handleSubmit(logInHandler)}>
					<div className={styles['login-input-block']}>
						<CustomInput
							type={'text'}
							value={data.name}
							placeholder={t('NAME')}
							onChange={(e): void => handlerData(e.currentTarget.value, 'name')}
							register={{ ...register('name', { required: true }) }}
						/>
						<CustomInput
							placeholder={t('LAST_NAME')}
							type={'text'}
							value={data.lastName}
							onChange={(e): void => handlerData(e.currentTarget.value, 'lastName')}
							register={{ ...register('lastName', { required: true }) }}
						/>
						<CustomInput
							placeholder={t('EMAIL')}
							type={'text'}
							value={data.email}
							onChange={(e): void => handlerData(e.currentTarget.value, 'email')}
							register={{ ...register('email', { required: true }) }}
						/>
						<CustomInput
							placeholder={t('PASSWORD')}
							type={'text'}
							value={data.password}
							onChange={(e): void => handlerData(e.currentTarget.value, 'password')}
							register={{ ...register('password', { required: true }) }}
						/>
					</div>
					<Button onClick={logInHandler} textBtn={t('LOG_IN')} />
				</form>
				<div className={styles['login-link']}>
					<CustomLink className={styles['login-link_link']} to={'/login'} linkText={t('GO_BACK')} />
				</div>
			</div>
		</div>
	);
};
