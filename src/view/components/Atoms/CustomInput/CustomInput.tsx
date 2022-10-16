import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { Input, InputProps, TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import cs from 'classnames';
import React from 'react';

import styles from './CustomInput.module.scss';

export interface CustomInputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		React.AriaAttributes {
	label?: string;
	register?: any;
	error?: boolean;
	errorMessage?: string;
}

export const CustomInput = ({
	error,
	className,
	errorMessage,
	...rest
}: CustomInputProps & TextFieldProps): React.ReactElement => {
	const classNames = cs(styles['input'], className);

	return (
		<>
			<TextField
				variant="outlined"
				fullWidth
				label={error ? <ReportProblemIcon fontSize={'small'} /> : rest.placeholder}
				error={error}
				helperText={error && errorMessage}
				className={classNames}
				{...rest}
			/>
		</>
	);
};
