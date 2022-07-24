import React from 'react';
import styles from './button.module.scss';

export interface ButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		React.AriaAttributes {
	textBtn: string;
}

export const Button = ({ style, textBtn, ...rest }: ButtonProps) => {
	return (
		<button style={style} className={styles['button']} {...rest}>
			{textBtn}
		</button>
	);
};
