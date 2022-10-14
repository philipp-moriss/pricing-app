import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import React from 'react';

import { Router } from './router/Router';
import { themeOptions } from './theme';

const App = (): React.ReactElement => {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={themeOptions}>
				<Router />
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default App;
