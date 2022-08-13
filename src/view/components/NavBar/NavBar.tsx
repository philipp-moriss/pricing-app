import React from 'react';

import { CustomLink } from '../Link/Link';
import styles from './NavBar.module.scss';

export const NavBar = (): React.ReactElement => {
	return (
		<nav className={styles['nav-bar']}>
			<ul className={styles['menu']}>
				<li>
					<CustomLink to={'/'} linkText={'Home'} />
				</li>
				<li>
					<CustomLink to={'/asdfsadf'} linkText={'Contact'} />
				</li>
				<li>
					<CustomLink to={'#'} linkText={'Privacy'} />
				</li>
			</ul>
		</nav>
	);
};
