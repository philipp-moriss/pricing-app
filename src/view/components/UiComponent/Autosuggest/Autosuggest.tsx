import React, { useState } from 'react';
import Select from 'react-select';

import styles from './Autosuggest.module.scss';

const optionsDefault = [
	{ value: 'Belarus', label: ' BY' },
	{ value: 'US', label: ' Dollar' },
	{ value: 'RU', label: ' RUB' },
] as any;
type AutosuggestType = {
	options: [];
	callBack: (value: any) => void;
	label?: string;
};
export const Autosuggest = ({ options, callBack, label }: AutosuggestType) => {
	const [value, setValue] = useState<string | null>('');

	const selectHandler = (value: any) => {
		setValue(value);
		callBack(value);
	};
	return (
		<div>
			{label && <span className={'label'}>{label}</span>}
			<Select
				options={optionsDefault}
				className={styles['autosuggest']}
				classNamePrefix={'autosuggest'}
				placeholder={'Start typing...'}
				isDisabled={false}
				value={value}
				onChange={(value) => selectHandler(value)}
			/>
		</div>
	);
};
