import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ForgotPassword } from '../../src/view/pages/ForgotPassword/ForgotPassword';
import { Login } from '../../src/view/pages/Login/Login';
import { Home } from '../view/pages/Home/Home';
import { NotFound } from '../view/pages/NotFound/NotFound';

export const Router = (): React.ReactElement => {
	return (
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/login" element={<Login />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
		</Routes>
	);
};
