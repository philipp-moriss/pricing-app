import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../view/pages/NotFound/NotFound';
import { Home } from '../view/pages/Home/Home';

export const Router = (): React.ReactElement => {
	return (
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
