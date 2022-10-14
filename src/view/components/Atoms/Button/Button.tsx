import { Button, ButtonProps } from '@mui/material';
import React from 'react';

export type IButton = ButtonProps;

const _Button = ({ children, ...rest }: IButton): React.ReactElement => {
	return (
		<Button variant="contained" {...rest}>
			{children}
		</Button>
	);
};
export default _Button;
