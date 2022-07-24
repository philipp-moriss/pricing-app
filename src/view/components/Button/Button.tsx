import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		React.AriaAttributes {
	textBtn: string;
}

export const Button = ({ textBtn, ...rest }: ButtonProps): React.ReactElement => {
	return (
		<button className={styles['button']} {...rest}>
			{textBtn}
		</button>
	);
};
