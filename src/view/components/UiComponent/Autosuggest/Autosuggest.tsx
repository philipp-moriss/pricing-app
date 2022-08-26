import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { CategoryType } from 'store/Type/models';

import styles from './Autosuggest.module.scss';

type AutosuggestType = {
	options: any[];
	callBack: (value: CategoryType) => void;
	label?: string;
};
export const Autosuggest = ({ options, callBack, label }: AutosuggestType): React.ReactElement => {
	const [value, setValue] = useState<string | null>('');
	const { t } = useTranslation();
	const selectHandler = (value: any): void => {
		setValue(value);
		callBack(value);
	};
	const customStyles = {
		control: (styles: any) => ({ ...styles, border: '1px solid gray' }),
		option: (styles: any) => ({
			...styles,
			':active': {
				backgroundColor: '#FF814A',
				color: 'white',
			},
		}),
	};
	return (
		<div>
			{label && <span className={'label'}>{label}</span>}
			<Select
				styles={customStyles}
				options={options}
				className={styles['autosuggest']}
				classNamePrefix={'autosuggest'}
				placeholder={t('START_TYPING')}
				isDisabled={false}
				value={value}
				onChange={(value): void => selectHandler(value)}
				theme={(theme): any => ({
					...theme,
					borderRadius: 8,
					colors: {
						...theme.colors,
						primary25: '#E8E8E8',
						primary: '#FF814A',
					},
				})}
			/>
		</div>
	);
};
