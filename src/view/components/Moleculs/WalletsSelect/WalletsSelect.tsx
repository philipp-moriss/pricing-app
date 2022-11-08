import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import {
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
} from '@mui/material';
import { SelectProps } from '@mui/material/Select/Select';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import cs from 'classnames';
import React, { useState } from 'react';
import { WalletModelType } from 'store/Type/models';

import styles from './WalletSelect.module.scss';

interface WalletsSelectProps extends SelectProps<string> {
	wallets: WalletModelType[] | undefined;
	showAllWallets?: boolean;
	onChange: (event: SelectChangeEvent<string>) => void;
	error?: boolean;
	errorMessage?: string;
}

export const WalletsSelect: React.FC<WalletsSelectProps> = ({
	wallets,
	label,
	showAllWallets = false,
	onChange,
	error,
	errorMessage,
	...props
}): React.ReactElement | null => {
	if (!wallets) return null;

	const { value, className } = props;
	const classNames = cs(styles['input'], { [styles['error']]: error }, className);
	const copyWallet = showAllWallets
		? [{ _id: 'showAll', name: 'ShowAll' }, ...wallets]
		: [...wallets];

	const [currentWallet, setCurrentWallet] = useState<string>(value ?? '');

	const [currentLabel, setCurrentLabel] = useState<string>(copyWallet[0]?.name);

	const onChangeHandler = (event: SelectChangeEvent<string>): void => {
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
					label={error ? <ReportProblemIcon fontSize={'small'} /> : currentLabel}
					error={error}
					className={classNames}
					{...props}
				>
					{copyWallet.map((wallet) => (
						<MenuItem key={wallet._id} value={wallet._id}>
							{wallet.name}
						</MenuItem>
					))}
				</Select>
				{error && <FormHelperText style={{ color: 'red' }}>{errorMessage}</FormHelperText>}
			</FormControl>
		</>
	);
};
