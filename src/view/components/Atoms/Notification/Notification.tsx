import { Alert, Snackbar } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';

import BaseStore from '../../../../store/NotificationStore/notification-store';
import style from './Notification.module.scss';

export const Notification = observer(() => {
	const { notification, switcherNotification, setNotification, serverResponse } = BaseStore;
	return (
		<div>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				className={style['snackbar']}
				autoHideDuration={4000}
				open={switcherNotification}
				onClose={(): void => {
					setNotification(undefined, false, undefined);
				}}
				sx={{ width: 'auto' }}
			>
				<Alert severity={notification} sx={{ width: '100%' }}>
					{serverResponse}
				</Alert>
			</Snackbar>
		</div>
	);
});
