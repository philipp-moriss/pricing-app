import { Alert, Snackbar, ThemeProvider } from '@mui/material';import { StyledEngineProvider } from '@mui/styled-engine-sc';import { observer } from 'mobx-react-lite';import React from 'react';import { Router } from './router/Router';import BaseStore from './store/BaseStore/base-store';import { themeOptions } from './theme';const messageNotificationDescription = {	error: 'This is an error alert — check it out!',	warning: 'This is a warning alert — check it out!!',	info: 'This is an info alert — check it out!',	success: 'This is a success alert — check it out!',};const App = observer((): React.ReactElement => {	const { notification, switcherNotification, setNotification, serverResponse } = BaseStore;	return (		<StyledEngineProvider injectFirst>			<ThemeProvider theme={themeOptions}>				<Router />			</ThemeProvider>			<Snackbar				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}				open={switcherNotification}				onClose={(): void => {					setNotification(undefined, false, undefined);				}}				sx={{ width: 'auto' }}			>				<Alert severity={notification} sx={{ width: '100%' }}>					{serverResponse}				</Alert>			</Snackbar>		</StyledEngineProvider>	);});export default App;