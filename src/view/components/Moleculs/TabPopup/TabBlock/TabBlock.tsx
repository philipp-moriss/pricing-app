import { Box, Typography } from '@mui/material';
import React from 'react';

export interface TabBodyProps {
	children: React.ReactNode;
	index: number;
	value: number;
}

export const TabBlock: React.FC<TabBodyProps> = ({
	children,
	value,
	index,
	...other
}): React.ReactElement => {
	return (
		<>
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
			</div>
		</>
	);
};
