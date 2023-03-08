import React from 'react';

import { AddReplenishmentForm } from '../../AddReplenishmentForm/AddReplenishmentForm';
import { AddSpendingForm } from '../../AddSpendingForm/AddSpendingForm';
import { ModalWrapper } from '../../ModalWrapper/ModalWrapper';
import { TabsComponent } from '../../TabPopup/TabsComponent';

type ExpenseAccountingModalType = {
	onClose: (value: boolean) => void;
	walletId: string;
};
export const AddSpendingOrReplenishmentModal = ({
	onClose,
	walletId,
}: ExpenseAccountingModalType): React.ReactElement => {
	return (
		<ModalWrapper closeCallback={(): void => onClose(false)}>
			<TabsComponent
				tabs={[
					{
						label: 'Spending',
					},
					{
						label: 'Deposit',
					},
				]}
				tabsContent={[
					{
						children: <AddSpendingForm walletId={walletId} onClose={onClose} />,
						index: 0,
					},
					{
						children: <AddReplenishmentForm walletId={walletId} onClose={onClose} />,
						index: 1,
					},
				]}
			/>
		</ModalWrapper>
	);
};
