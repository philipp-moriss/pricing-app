import styles from './Button.module.scss';
import React from 'react';

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
