import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ForgotPassword } from '../../src/view/pages/ForgotPassword/ForgotPassword';
import { Login } from '../../src/view/pages/Login/Login';
import AuthStore from '../store/auth-store';
import { Home } from '../view/pages/Home/Home';
import { NotFound } from '../view/pages/NotFound/NotFound';

export const Router = observer(() => {
	const { auth, setAuth } = AuthStore;

	useEffect(() => {
		const auth = JSON.parse(localStorage.getItem('auth') as string);
		if (auth) {
			AuthStore.setAuth(true);
		}
	}, []);
	if (!auth) {
		return (
			<Routes>
				<Route path={'/login'} element={<Login />} />
				<Route path={'/forgot-password'} element={<ForgotPassword />} />
				<Route path={'*'} element={<NotFound />} />
			</Routes>
		);
	}
	return (
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route path={'*'} element={<NotFound />} />
		</Routes>
	);
});
