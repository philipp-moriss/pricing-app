import React from 'react';
import styles from './CustomInput.module.scss';

export interface CustomInputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		React.AriaAttributes {
	label?: string;
}

export const CustomInput = ({ label, ...rest }: CustomInputProps): React.ReactElement => {
	return (
		<>
			{label && <span className={styles['label']}>{label}</span>}
			<input className={styles['input']} {...rest} />
		</>
	);
};
