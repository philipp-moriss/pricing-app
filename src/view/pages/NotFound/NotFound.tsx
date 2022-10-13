import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import page404Image from '../../../assets/backgrounds/404-error.png';
import Button from '../../components/UiComponent/Button/Button';
import styles from './NotFound.module.scss';

export const NotFound = (): React.ReactElement => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<div className={styles['container']}>
			<div className={styles['not-found']}>
				<img src={page404Image} alt="404 not found" />
				<h6 className={styles['not-found_text']}>{t('OOPS_THIS_PAGE_COULD_NOT_BE_FOUND')}</h6>
				<span className={styles['not-found_description']}>
					{t(
						'THE_PAGE_YOU_ARE_LOOKING_FOR_MIGHT_HAVE_BEEN_REMOVED_HAD_ITS_NAME_CHANGED_OR_IS_TEMPORARILY_UNAVAILABLE',
					)}
				</span>
				<Button onClick={(): void => navigate('/')} textBtn={t('BACK_TO_HOME')} />
			</div>
		</div>
	);
};
