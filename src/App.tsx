import { Theme, ThemeProvider, createTheme } from '@mui/material';
import { grey, orange, purple } from '@mui/material/colors';
import React from 'react';

import { Router } from './router/Router';

const theme: Theme = createTheme({
	palette: {
		primary: {
			main: '#ff9b06',
			contrastText: '#000000',
			dark: purple[500],
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
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	);
};

export default App;
