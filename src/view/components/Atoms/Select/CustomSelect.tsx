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
import React from 'react';

import styles from './Select.module.scss';

export interface ISelectProps extends SelectProps<string> {
	data: Date[];
	value: string;
	onChange: (event: SelectChangeEvent<string>) => void;
	errorMessage?: string;
	error?: boolean;
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
	error,
	className,
	errorMessage,
	...props
}: ISelectProps): React.ReactElement => {
	const classNames = cs(styles['input'], { [styles['error']]: error }, className);
	return (
		<FormControl fullWidth>
			{label && <InputLabel>{label}</InputLabel>}
			<Select
				multiple={false}
				value={value}
				onChange={onChange}
				className={classNames}
				input={<OutlinedInput label={label && label} fullWidth />}
				{...props}
			>
				{data.map((item) => (
					<MenuItem key={item._id} value={item.value}>
						{item.value}
					</MenuItem>
				))}
			</Select>
			{error && <FormHelperText style={{ color: 'red' }}>{errorMessage}</FormHelperText>}
		</FormControl>
	);
};
