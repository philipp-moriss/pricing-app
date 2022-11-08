import React from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as LogoIcon } from '../../../../assets/logo/logo-pony-web.svg';
import styles from './Footer.module.scss';

export const Footer = (): React.ReactElement => {
	const { t } = useTranslation();
	return (
		<footer className={styles['footer']}>
			<div>
				<LogoIcon />
			</div>
			<ul className={styles['footer-ul']}>
				<li>{t('OFFICE')}</li>
				<li>
					<address>{t('MINSK_BELARUS')}</address>
				</li>
			</ul>
			<ul className={styles['footer-ul']}>
				<li>{t('CONTACTS')}</li>
				<li>
					<a href={'#'}>ponyWeb@gmail.com</a>
				</li>
				<li>
					<a href={'tel:+375 25 995 8308'}>+375 25 995 83 08</a>
				</li>
			</ul>
			<p>{t('POWERED_BY_PONY_WEB_COMPANY')}</p>
		</footer>
	);
};
