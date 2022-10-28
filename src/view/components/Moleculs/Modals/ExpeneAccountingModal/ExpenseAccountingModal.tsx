import React from 'react';

import { ExpenseAccounting } from '../../ExpenseAccounting/ExpenseAccounting';
import { ModalWrapper } from '../../ModalWrapper/ModalWrapper';

type ExpenseAccountingModalType = {
	onClose: (value: boolean) => void;
};
export const ExpenseAccountingModal = ({
	onClose,
}: ExpenseAccountingModalType): React.ReactElement => {
	return (
		<ModalWrapper closeCallback={(): void => onClose(false)}>
			<ExpenseAccounting onClose={onClose} />
		</ModalWrapper>
	);
};
