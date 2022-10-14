import { MenuItem, OutlinedInput, Select } from '@mui/material';
import { SelectProps } from '@mui/material/Select/Select';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import React from 'react';

export interface ISelectProps extends SelectProps<string> {
	data: Date[];
	value: string;
	onChange: (event: SelectChangeEvent<string>) => void;
}

type Date = {
	_id: string;
	value: string;
};

export const CustomSelect = ({
	data,
	value,
	onChange,
	...props
}: ISelectProps): React.ReactElement => {
	return (
		<Select
			multiple={false}
			value={value}
			onChange={onChange}
			input={<OutlinedInput fullWidth />}
			{...props}
		>
			{data.map((item) => (
				<MenuItem key={item._id} value={item.value}>
					{item.value}
				</MenuItem>
			))}
		</Select>
	);
};
