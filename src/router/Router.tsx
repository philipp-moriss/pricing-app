import { observer } from 'mobx-react-lite';
import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes, useLocation } from 'react-router-dom';
import WalletStore from 'store/WalletStore';
import { ForgotPassword } from 'view/pages/ForgotPassword/ForgotPassword';
import { Home } from 'view/pages/Home/Home';
import { Login } from 'view/pages/Login/Login';
import { Main } from 'view/pages/Main/Main';
import { PersonalCabinet } from 'view/pages/Main/PersonalCabinet/PersonalCabinet';
import { Settings } from 'view/pages/Main/Settings/settings';
import { Wallets } from 'view/pages/Main/Wallet/Wallets';
import { WorkSpace } from 'view/pages/Main/WorkSpace/WorkSpace';
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
		const wallet = JSON.parse(localStorage.getItem('wallet') as string);
		if (authStorage && !auth) {
			AuthStore.setAuth(true);
			AuthStore.setUser(userData);
			AuthStore.setNewUser(newUser);
			WalletStore.setWallet(wallet);
		}
	}, []);

	return (
		<Routes location={location}>
			{auth ? (
				<>
					<Route path={'/'} element={<Main />}>
						<Route index element={<Wallets />} />
						<Route path={'/work-space'} element={<WorkSpace />} />
						<Route path={'/settings'} element={<Settings />} />
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
