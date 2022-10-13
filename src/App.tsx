import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

import { Router } from './router/Router';

export const themeOptions: ThemeOptions = createTheme({
	palette: {
		primary: {
			main: '#ff9b06',
			contrastText: '#000000',
			dark: 'rgba(121,17,249,0.69)',
		},
		secondary: {
			main: '#3be4d9',
		},
		text: {
			primary: 'rgba(0,0,0,0.87)',
		},
		warning: {
			main: '#e705f7',
		},
	},
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});

const App = (): React.ReactElement => {
	return (
		<ThemeProvider theme={themeOptions}>
			<Router />
		</ThemeProvider>
	);
};

export default App;
