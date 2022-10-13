import { Theme, ThemeProvider, createTheme } from '@mui/material';
import { grey, orange, purple } from '@mui/material/colors';
import React from 'react';

import { Router } from './router/Router';

const theme: Theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: orange[300],
			dark: purple[500],
			contrastText: 'white',
			light: 'orange',
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
