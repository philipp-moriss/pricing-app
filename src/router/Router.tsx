import { observer } from 'mobx-react-lite';
import React, { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ForgotPassword } from 'view/pages/ForgotPassword/ForgotPassword';
import { Home } from 'view/pages/Home/Home';
import { Login } from 'view/pages/Login/Login';
import { Main } from 'view/pages/Main/Main';
import { PersonalCabinet } from 'view/pages/Main/PersonalCabinet/PersonalCabinet';
import { Wallet } from 'view/pages/Main/Wallet/Wallet';
import { NewUser } from 'view/pages/NewUser/NewUser';
import { NotFound } from 'view/pages/NotFound/NotFound';

import AuthStore from '../store/AuthStore/auth-store';

export const Router = observer((): React.ReactElement => {
	const { auth } = AuthStore;
	const location = useLocation();
	useLayoutEffect(() => {
		const authStorage = JSON.parse(localStorage.getItem('auth') as string);
		const userData = JSON.parse(localStorage.getItem('user-data') as string);
		const newUser = JSON.parse(localStorage.getItem('new-user-data') as string);
		if (authStorage && !auth) {
			AuthStore.setAuth(true);
			AuthStore.setUser(userData);
			AuthStore.setNewUser(newUser);
		}
	}, []);

	return (
		<Routes location={location}>
			{auth ? (
				<>
					<Route path={'/'} element={<Main />}>
						<Route index element={<Wallet />} />
						<Route path={'/personal-cabinet'} element={<PersonalCabinet />} />
						<Route path={'/setting'} element={<PersonalCabinet />} />
					</Route>
				</>
			) : (
				<>
					<Route path={'/'} element={<Home />} />
					<Route path={'/login'} element={<Login />} />
					<Route path={'/new-user'} element={<NewUser />} />
					<Route path={'/forgot-password'} element={<ForgotPassword />} />
				</>
			)}
			<Route path={'*'} element={<NotFound />} />
		</Routes>
	);
});
