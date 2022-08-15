import { CustomLink } from '../UiComponent/Link/Link';
import styles from './NavBar.module.scss';
import React from 'react';

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
