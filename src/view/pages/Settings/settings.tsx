import React from 'react';
import { PersonalCabinet } from 'view/pages/Main/Settings/PersonalCabinet/PersonalCabinet';
import Setting from 'view/pages/Main/Settings/Setting/Setting';

import styles from './settings.module.scss';

export const Settings = (): React.ReactElement => {
	return (
		<div className={styles['settings']}>
			<Setting />
			<PersonalCabinet />
		</div>
	);
};
