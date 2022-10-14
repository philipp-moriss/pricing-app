import React from 'react';

import { ExpenseAccounting } from '../../../components/Moleculs/ExpenseAccounting/ExpenseAccounting';
import { ExpenseTable } from '../../../components/Moleculs/ExpenseTable/ExpenseTable';
import styles from './WorkSpace.module.scss';

export const WorkSpace = (): React.ReactElement => {
	return (
		<div className={styles['work-space']}>
			<ExpenseAccounting />
			{/*<TopCategories />*/}
			<ExpenseTable />
		</div>
	);
};
