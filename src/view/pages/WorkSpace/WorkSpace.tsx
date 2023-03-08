import React from 'react';
import { ExpenseTable } from 'view/components/Moleculs/ExpenseTable/ExpenseTable';

import styles from './WorkSpace.module.scss';

export const WorkSpace = (): React.ReactElement => {
	return (
		<div className={styles['work-space']}>
			<ExpenseTable />
		</div>
	);
};
