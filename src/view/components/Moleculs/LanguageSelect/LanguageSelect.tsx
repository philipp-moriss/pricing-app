import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { CustomSelect } from '../../Atoms/Select/CustomSelect';

export const LanguageSelect = (): React.ReactElement => {
	const { t, i18n } = useTranslation();

	const languages = [
		{
			_id: '1',
			value: 'EN',
		},
		{
			_id: '2',
			value: 'RU',
		},
	];

	const changeLanguageHandler = (e: SelectChangeEvent<string>): void => {
		e.target.value && i18n.changeLanguage(e.target.value);
	};
	return <CustomSelect value={i18n.language} onChange={changeLanguageHandler} data={languages} />;
};
