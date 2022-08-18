import React from 'react';
import { ExpenseAccounting } from 'view/pages/Main/WorkSpace/ExpenseAccounting/ExpenseAccounting';
import { ExpenseTable } from 'view/pages/Main/WorkSpace/ExpenseTable/ExpenseTable';
import { TopCategories } from 'view/pages/Main/WorkSpace/TopCategories/TopCategories';

import styles from './WorkSpace.module.scss';

export const WorkSpace = (): React.ReactElement => {
	return (
		<div className={styles['work-space']}>
			<ExpenseAccounting />
			<TopCategories />
			<ExpenseTable />
		</div>
	);
};
