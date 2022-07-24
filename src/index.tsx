import React from 'react';
import ReactDOM from 'react-dom/client';
import './globalStyles/main.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<BrowserRouter basename={'pricing-app'}>
		<App />
	</BrowserRouter>,
);
