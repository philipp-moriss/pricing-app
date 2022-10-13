import { Button, ButtonProps } from '@mui/material';
import React from 'react';

import styles from './Button.module.scss';

// export interface Button
// 	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
// 		React.AriaAttributes {
// 	textBtn: string;
// }

export interface IButton extends ButtonProps {
	textBtn: string;
}

const _Button = ({ textBtn, ...rest }: IButton): React.ReactElement => {
	return (
		// <button className={styles['button']} {...rest}>
		// 	{textBtn}
		// </button>
		<Button variant="contained" {...rest}>
			{textBtn}
		</Button>
	);
};
export default _Button;
