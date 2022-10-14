import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { SelectProps } from '@mui/material/Select/Select';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import React, { useState } from 'react';

import { WalletModelType } from '../../../../store/Type/models';

interface WalletsSelectProps extends SelectProps<string> {
	wallets: WalletModelType[] | undefined;
	showAllWallets?: boolean;
	onChange: (event: SelectChangeEvent<string>) => void;
}

export const WalletsSelect: React.FC<WalletsSelectProps> = ({
	wallets,
	onChange,
	label,
	showAllWallets = false,
	value,
	...props
}): React.ReactElement | null => {
	if (!wallets) return null;

	const copyWallet = showAllWallets ? [{ _id: '1', name: 'ShowAll' }, ...wallets] : [...wallets];
	const [currentWallet, setCurrentWallet] = useState<string>(copyWallet[0]._id);
	const [currentLabel, setCurrentLabel] = useState<string>(copyWallet[0].name);

	const onChangeHandler = (event: SelectChangeEvent<string>) => {
		const wallet = copyWallet.find((wallet) => {
			return wallet._id === event.target.value;
		});
		if (wallet) {
			setCurrentWallet(wallet._id);
			setCurrentLabel(wallet.name);
		}
		onChange(event);
	};

	return (
		<>
			<FormControl fullWidth>
				<InputLabel>{currentLabel}</InputLabel>
				<Select
					multiple={false}
					value={currentWallet}
					onChange={onChangeHandler}
					input={<OutlinedInput label={currentLabel} fullWidth />}
					{...props}
				>
					{copyWallet.map((wallet) => (
						<MenuItem key={wallet._id} value={wallet._id}>
							{wallet.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
};
