import React from 'react';
import { ExpenseTable } from 'view/components/Moleculs/ExpenseTable/ExpenseTable';

import { ExpenseAccounting } from '../../components/Moleculs/ExpenseAccounting/ExpenseAccounting';
import styles from './WorkSpace.module.scss';

export const WorkSpace = (): React.ReactElement => {
	return (
		<div className={styles['work-space']}>
			<ExpenseTable />
			<ExpenseAccounting />
		</div>
	);
};
