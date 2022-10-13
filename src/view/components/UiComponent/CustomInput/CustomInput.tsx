import { Input, InputProps } from '@mui/material';
import cs from 'classnames';
import React from 'react';

import styles from './CustomInput.module.scss';

export interface CustomInputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		React.AriaAttributes {
	label?: string;
	register?: any;
	error?: boolean;
	errorMessage?: JSX.Element;
}

export const CustomInput = ({
	label,
	error,
	className,
	errorMessage,
	...rest
}: CustomInputProps & InputProps): React.ReactElement => {
	const classNames = cs(styles['input'], { [styles['error']]: error }, className);
	return (
		<>
			{label && <span className={'label'}>{label}</span>}
			<Input disableUnderline className={classNames} margin={'dense'} {...rest} />
			{error && errorMessage}
		</>
	);
};
