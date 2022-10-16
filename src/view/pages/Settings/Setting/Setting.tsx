import React, { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomSelect } from 'view/components/Atoms/Select/CustomSelect';
import { Title } from 'view/components/Atoms/Title/Title';
import { LanguageSelect } from 'view/components/Moleculs/LanguageSelect/LanguageSelect';

import styles from './Setting.module.scss';

const Setting = (): React.ReactElement => {
	const { t, i18n } = useTranslation();
	const [selectedLanguage, setSelectedLanguage] = useState('');
	const changeLanguageHandler = (e: FormEvent<HTMLSelectElement>): void => {
		e.currentTarget.value && i18n.changeLanguage(e.currentTarget.value);
	};
	useEffect(() => {
		setSelectedLanguage(i18n.language);
	}, []);
	return (
		<div className={styles['setting']}>
			<div className={styles['setting__wrapper']}>
				<Title title={t('SETTINGS')} size={'h3'} />
				<div className={styles['setting__body']}>
					<div className={styles['setting__body__block']}>
						<div className={styles['setting__body__language-block']}>
							<div>{t('CHANGE_LANGUAGE')}</div>
							<LanguageSelect />
						</div>
						{/*	<div className={styles['settings__body__theme-block']}>
							<div>{t('CHANGE_THEME')}</div>
						</div>*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Setting;
