import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthStore from 'store/AuthStore';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './PersonalCabinet.module.scss';

export const PersonalCabinet = observer((): React.ReactElement => {
	const { user } = AuthStore;
	const { t } = useTranslation();
	return (
		<div className={styles['personal-cabinet']}>
			<div className={styles['personal-cabinet__wrapper']}>
				<div className={styles['personal-cabinet__body']}>
					<Title title={t('YOUR_PERSONAL_DATA')} size={'h3'} />
					<div className={styles['personal-cabinet__block-text']}>
						<span>{t('EMAIL')}:</span>
						<span className={styles['personal-cabinet__body_text']}>{user?.email}</span>
					</div>
					<div className={styles['personal-cabinet__block-text']}>
						<span>{t('NAME')}:</span>
						<span className={styles['personal-cabinet__body_text']}>{user?.firstName}</span>
					</div>
					<div className={styles['personal-cabinet__block-text']}>
						<span>{t('LAST_NAME')}:</span>
						<span className={styles['personal-cabinet__body_text']}>{user?.lastName}</span>
					</div>
					<div className={styles['personal-cabinet__block-text']}>
						<span>{t('DATE_REGISTRATION')}:</span>
						<span className={styles['personal-cabinet__body_text']}>{user?.createdAt}</span>
					</div>
				</div>
			</div>
		</div>
	);
});
