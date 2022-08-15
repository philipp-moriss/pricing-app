import { ForgotPassword } from '../../src/view/pages/ForgotPassword/ForgotPassword';
import { Login } from '../../src/view/pages/Login/Login';
import { Main } from '../../src/view/pages/Main/Main';
import { NewUser } from '../../src/view/pages/NewUser/NewUser';
import { PersonalCabinet } from '../../src/view/pages/PersonalCabinet/PersonalCabinet';
import AuthStore from '../store/AuthStore/auth-store';
import { Home } from '../view/pages/Home/Home';
import { NotFound } from '../view/pages/NotFound/NotFound';
import { observer } from 'mobx-react-lite';
import React, { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

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
