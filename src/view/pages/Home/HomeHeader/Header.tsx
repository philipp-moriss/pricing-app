import { ReactComponent as Logo } from 'assets/logo/logo-pony-web.svg';
import React, { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCustomNavigate } from 'utils/hooks/useCustomNav';
import Button from 'view/components/Atoms/Button/Button';
import { LanguageSelect } from 'view/components/Moleculs/LanguageSelect/LanguageSelect';
import styles from 'view/pages/Home/HomeHeader/Header.module.scss';
import { NavBar } from 'view/pages/Layout/NavBar/NavBar';

export const Header = (): React.ReactElement => {
	const [show, setShow] = useState(true);
	const { t } = useTranslation();
	const { goTo } = useCustomNavigate();
	const toggleMenu = (): void => {
		if (!show) {
			document.body.style.overflow = 'auto';
		} else {
			document.body.style.overflow = 'hidden';
		}
		setShow(!show);
	};

	return (
		<header className={styles['header']}>
			<button className={styles['burger-button']} onClick={toggleMenu}>
				<span className={`${styles['burger-line']} ${!show && styles['burger-line-active']}`} />
			</button>
			<div className={styles['header__language-block']}>
				{/*			<div>{t('CHANGE_LANGUAGE')}</div>*/}
				<LanguageSelect />
			</div>
			<div className={`${styles['header-wrapper']} ${!show && styles['header-wrapper-show']}`}>
				<div className={styles['header-logo']}>
					<Logo />
				</div>
				<NavBar />
				<div className={styles['button-container']}>
					<Button
						onClick={(): void => {
							goTo('/login');
						}}
						className={styles['header__btn-login']}
					>
						{t('LOGIN')}
					</Button>
					<Button onClick={(): void => goTo('/new-user')} className={styles['header__btn-sing-up']}>
						{t('SING_UP')}
					</Button>
				</div>
			</div>
		</header>
	);
};
