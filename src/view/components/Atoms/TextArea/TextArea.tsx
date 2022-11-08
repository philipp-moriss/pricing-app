import { TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import React from 'react';

type CustomTextAreaProps = TextFieldProps;

export const CustomTextArea: React.FC<CustomTextAreaProps> = ({ ...props }): React.ReactElement => {
	return (
		<>
			<TextField multiline={true} minRows={2} fullWidth {...props} />
		</>
	);
};
