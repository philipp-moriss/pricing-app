import React from 'react';
import { Header } from '../components/Header/Header';

export const Home = (): React.ReactElement => {
	return (
		<>
			<Header />
			<div className={'container'}>
				<div>info</div>
				<div>bg</div>
			</div>
		</>
	);
};
