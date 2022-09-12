import React from 'react';

import styles from './Button.module.scss';

export interface ButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		React.AriaAttributes {
	textBtn: string;
	backgroundColor?: string;
}

export const Button = ({ textBtn, backgroundColor, ...rest }: ButtonProps): React.ReactElement => {
	const style = { ...rest?.style, backgroundColor };
	return (
		<button className={styles['button']} style={style} {...rest}>
			{textBtn}
		</button>
	);
};
