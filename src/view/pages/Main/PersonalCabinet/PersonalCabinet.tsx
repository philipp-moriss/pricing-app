import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthStore from 'store/AuthStore';
import { Title } from 'view/components/UiComponent/Title/Title';
import styles from 'view/pages/Main/PersonalCabinet/PersonalCabinet.module.scss';

export const PersonalCabinet = observer((): React.ReactElement => {
	const { newUserInfo } = AuthStore;
	const { t } = useTranslation();
	return (
		<div className={styles['personal-cabinet']}>
			<div className={styles['personal-cabinet__wrapper']}>
				<div className={styles['personal-cabinet__body']}>
					<Title title={t('YOUR_PERSONAL_DATA')} size={'h3'} />
					<div className={styles['personal-cabinet__block-text']}>
						<span>{t('EMAIL')}:</span>
						<span className={styles['personal-cabinet__body_text']}>{newUserInfo?.email}</span>
					</div>
					<div className={styles['personal-cabinet__block-text']}>
						<span>{t('NAME')}:</span>
						<span className={styles['personal-cabinet__body_text']}>{newUserInfo?.name}</span>
					</div>
					<div className={styles['personal-cabinet__block-text']}>
						<span>{t('LAST_NAME')}:</span>
						<span className={styles['personal-cabinet__body_text']}>{newUserInfo?.lastName}</span>
					</div>
					<div className={styles['personal-cabinet__block-text']}>
						<span>{t('CURRENT_CURRENCY')}:</span>
						<span className={styles['personal-cabinet__body_text']}>1313131</span>
					</div>
				</div>
			</div>
		</div>
	);
});
