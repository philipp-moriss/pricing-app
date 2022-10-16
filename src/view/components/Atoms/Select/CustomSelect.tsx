import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { SelectProps } from '@mui/material/Select/Select';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import React from 'react';

export interface ISelectProps extends SelectProps<string> {
	data: Date[];
	value: string;
	onChange: (event: SelectChangeEvent<string>) => void;
	errorMessage?: string;
}

type Date = {
	_id: string;
	value: string;
};

export const CustomSelect = ({
	data,
	value,
	label,
	onChange,
	...props
}: ISelectProps): React.ReactElement => {
	return (
		<FormControl fullWidth>
			{label && <InputLabel>{label}</InputLabel>}
			<Select
				multiple={false}
				value={value}
				onChange={onChange}
				input={<OutlinedInput label={label && label} fullWidth />}
				{...props}
			>
				{data.map((item) => (
					<MenuItem key={item._id} value={item.value}>
						{item.value}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
