import React from 'react';

import { ExpenseAccounting } from '../../ExpenseAccounting/ExpenseAccounting';
import { ModalWrapper } from '../../ModalWrapper/ModalWrapper';

type ExpenseAccountingModalType = {
	onClose: (value: boolean) => void;
	walletId: string;
};
export const ExpenseAccountingModal = ({
	onClose,
	walletId,
}: ExpenseAccountingModalType): React.ReactElement => {
	return (
		<ModalWrapper closeCallback={(): void => onClose(false)}>
			<ExpenseAccounting
				walletId={walletId}
				className={'expense-accounting__modal-wrapper'}
				onClose={onClose}
			/>
		</ModalWrapper>
	);
};
