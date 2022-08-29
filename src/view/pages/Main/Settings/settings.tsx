import React, { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'view/components/UiComponent/Select/Select';
import { Title } from 'view/components/UiComponent/Title/Title';
import { PersonalCabinet } from 'view/pages/Main/PersonalCabinet/PersonalCabinet';

import styles from './settings.module.scss';

export const Settings = (): React.ReactElement => {
	const { t, i18n } = useTranslation();

	const changeLanguageHandler = (e: FormEvent<HTMLSelectElement>): void => {
		e.currentTarget.value && i18n.changeLanguage(e.currentTarget.value);
	};
	return (
		<div className={styles['settings']}>
			<div className={styles['settings__wrapper']}>
				<Title title={t('SETTINGS')} size={'h3'} />
				<div className={styles['settings__body']}>
					<div className={styles['settings__body__block']}>
						<div className={styles['settings__body__language-block']}>
							<div>{t('CHANGE_LANGUAGE')}</div>
							<Select
								className={'button__change-language'}
								onChange={changeLanguageHandler}
								options={['EN', 'RU']}
							/>
						</div>
						{/*	<div className={styles['settings__body__theme-block']}>
							<div>{t('CHANGE_THEME')}</div>
						</div>*/}
					</div>
				</div>
			</div>
			<PersonalCabinet />
		</div>
	);
};
