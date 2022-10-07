import React from 'react';

import styles from './CustomInput.module.scss';

export interface CustomInputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		React.AriaAttributes {
	label?: string;
	register?: any;
}

export const CustomInput = ({ label, register, ...rest }: CustomInputProps): React.ReactElement => {
	return (
		<>
			{label && <span className={'label'}>{label}</span>}
			<input {...register} className={styles['input']} {...rest} />
		</>
	);
};
