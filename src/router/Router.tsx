import { observer } from 'mobx-react-lite';
import React, { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ForgotPassword } from '../../src/view/pages/ForgotPassword/ForgotPassword';
import { Login } from '../../src/view/pages/Login/Login';
import { Main } from '../../src/view/pages/Main/Main';
import AuthStore from '../store/auth-store';
import { Home } from '../view/pages/Home/Home';
import { NotFound } from '../view/pages/NotFound/NotFound';

export const Router = observer((): React.ReactElement => {
	const { auth } = AuthStore;
	const location = useLocation();
	useLayoutEffect(() => {
		const authStorage = JSON.parse(localStorage.getItem('auth') as string);

		if (authStorage && !auth) {
			AuthStore.setAuth(true);
		}
	}, []);

	return (
		<Routes location={location}>
			{auth ? (
				<>
					<Route path={'/'} element={<Main />} />
				</>
			) : (
				<>
					<Route path={'/'} element={<Home />} />
					<Route path={'/login'} element={<Login />} />
					<Route path={'/forgot-password'} element={<ForgotPassword />} />
				</>
			)}
			<Route path={'*'} element={<NotFound />} />
		</Routes>
	);
});
