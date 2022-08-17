import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewUserType } from 'store/Type/models';

import logo from '../../../assets/logo/logo-pony-web.svg';
import AuthStore from '../../../store/AuthStore';
import { Button } from '../../components/UiComponent/Button/Button';
import { CustomInput } from '../../components/UiComponent/CustomInput/CustomInput';
import { CustomLink } from '../../components/UiComponent/Link/Link';
import { Title } from '../../components/UiComponent/Title/Title';
import styles from './NewUser.module.scss';

export const NewUser = (): React.ReactElement => {
	const [data, setData] = useState<NewUserType>({
		name: '',
		email: '',
		lastName: '',
		password: '',
	});
	const navigate = useNavigate();
	const logInHandler = (): void => {
		if (data.name && data.password && data.lastName && data.email) {
			AuthStore.setNewUser(data);
			alert('GOOD : ), This will take you to the Login page ');
			navigate('/login');
		} else {
			alert('Empty field');
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
				<Title title={'New user'} size={'h1'} className={styles['login-title']} />
				<div className={styles['login-input-block']}>
					<CustomInput
						type={'text'}
						value={data.name}
						placeholder={'Name'}
						onChange={(e): void => handlerData(e.currentTarget.value, 'name')}
					/>
					<CustomInput
						placeholder={'Last name'}
						type={'text'}
						value={data.lastName}
						onChange={(e): void => handlerData(e.currentTarget.value, 'lastName')}
					/>
					<CustomInput
						placeholder={'Email'}
						type={'text'}
						value={data.email}
						onChange={(e): void => handlerData(e.currentTarget.value, 'email')}
					/>
					<CustomInput
						placeholder={'Password'}
						type={'text'}
						value={data.password}
						onChange={(e): void => handlerData(e.currentTarget.value, 'password')}
					/>
				</div>
				<Button onClick={logInHandler} textBtn={'Log in'} />
				<div className={styles['login-link']}>
					<CustomLink className={styles['login-link_link']} to={'/login'} linkText={'Go back'} />
				</div>
			</div>
		</div>
	);
};
