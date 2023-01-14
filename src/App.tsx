import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { Router } from './router/Router';
import { themeOptions } from './theme';
import { Notification } from './view/components/Atoms/Notification/Notification';

const App = observer((): React.ReactElement => {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={themeOptions}>
				<GoogleOAuthProvider clientId="1040714178608-piumpf1s1ts4j9lf6cjq9203hdqrebat">
					<Router />
				</GoogleOAuthProvider>
			</ThemeProvider>
			<Notification />
		</StyledEngineProvider>
	);
});

export default App;
