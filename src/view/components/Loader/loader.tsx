import React from 'react';
import styles from './loader.module.scss';

export const Loader = (): React.ReactElement => {
	return (
		<div className={styles['loader']}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
