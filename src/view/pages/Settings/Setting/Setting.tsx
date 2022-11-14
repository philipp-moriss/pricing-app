import React from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'view/components/Atoms/Title/Title';
import { LanguageSelect } from 'view/components/Moleculs/LanguageSelect/LanguageSelect';

import styles from './Setting.module.scss';

const Setting = (): React.ReactElement => {
	const { t } = useTranslation();

	return (
		<div className={styles['setting']}>
			<div className={styles['setting__wrapper']}>
				<Title title={t('SETTINGS')} size={'h3'} />
				<div className={styles['setting__body']}>
					<div className={styles['setting__body__language-block']}>
						<div>{t('CHANGE_LANGUAGE')}</div>
						<div className={styles['setting__body__language-block__select-wrapper']}>
							<LanguageSelect />
						</div>
					</div>
					{/*	<div className={styles['settings__body__theme-block']}>
							<div>{t('CHANGE_THEME')}</div>
						</div>*/}
				</div>
			</div>
		</div>
	);
};

export default Setting;
