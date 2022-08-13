import React, { useState } from 'react';
import Select from 'react-select';

import styles from './Autosuggest.module.scss';

const options = [
	{ value: 'Belarus', label: ' BY' },
	{ value: 'US', label: ' Dollar' },
	{ value: 'RU', label: ' RUB' },
] as any;

export const Autosuggest = () => {
	const [value, setValue] = useState<string | null>('');
	return (
		<div>
			<Select
				id={'131'}
				options={options}
				className={styles['autosuggest']}
				classNamePrefix={'autosuggest'}
				placeholder={'Start typing...'}
				isDisabled={false}
				value={value}
				onChange={(value) => setValue(value)}
			/>
		</div>
	);
};
