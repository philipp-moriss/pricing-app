import React from 'react';

import { PersonalCabinet } from './PersonalCabinet/PersonalCabinet';
import Setting from './Setting/Setting';
import styles from './settings.module.scss';

export const Settings = (): React.ReactElement => {
	return (
		<div className={styles['settings']}>
			<Setting />
			<PersonalCabinet />
		</div>
	);
};
