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
	label,
	error,
	className,
	errorMessage,
	...rest
}: CustomInputProps): React.ReactElement => {
	const classNames = cs(styles['input'], { [styles['error']]: error }, className);
	return (
		<>
			{label && <span className={styles['label']}>{label}</span>}
			<input className={classNames} {...rest} />
			{error && <span className={styles['error-message']}>{errorMessage}</span>}
		</>
	);
};
