import React from 'react';
import { useTranslation } from 'react-i18next';

import { CustomLink } from '../UiComponent/Link/Link';
import styles from './NavBar.module.scss';

export const NavBar = (): React.ReactElement => {
	const { t } = useTranslation();
	return (
		<nav className={styles['nav-bar']}>
			<ul className={styles['menu']}>
				<li>
					<CustomLink to={'/asdfsadf'} linkText={t('CONTACT')} />
				</li>
				<li>
					<CustomLink to={'#'} linkText={t('PRIVACY')} />
				</li>
			</ul>
		</nav>
	);
};
