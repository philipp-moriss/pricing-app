import { Tab, Tabs } from '@mui/material';
import { TabProps } from '@mui/material/Tab/Tab';
import React from 'react';

import { TabBlock, TabBodyProps } from './TabBlock/TabBlock';

interface TabsComponentProps {
	tabs: TabProps[];
	tabsContent: Omit<TabBodyProps, 'value'>[];
}

export const TabsComponent: React.FC<TabsComponentProps> = ({
	tabs,
	tabsContent,
	...props
}): React.ReactElement => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
		setValue(newValue);
	};
	return (
		<>
			<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
				{tabs.map((tab, index) => {
					return <Tab {...tab} key={'tab-header' + index} />;
				})}
			</Tabs>

			{tabsContent.map((tabContent, index) => {
				return (
					<TabBlock value={value} index={tabContent.index} key={'tab-content' + index}>
						{tabContent.children}
					</TabBlock>
				);
			})}
		</>
	);
};
