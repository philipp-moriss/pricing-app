import React from 'react';import { useTranslation } from 'react-i18next';import { useCustomNavigate } from 'utils/hooks/useCustomNav';import { Arrow } from 'view/components/Atoms/Arrow/Arrow';import Button from 'view/components/Atoms/Button/Button';import iconMoney from '../../../assets/icons/mone.svg';import iconNote from '../../../assets/icons/note.svg';import iconPhone from '../../../assets/icons/phone.svg';import saveMoney from '../../../assets/images/save-money.jpg';import { Card } from '../../components/Atoms/Card/Card';import { Title } from '../../components/Atoms/Title/Title';import { Footer } from './Footer/Footer';import styles from './Home.module.scss';import { Header } from './HomeHeader/Header';import { Info } from './Info/Info';export const Home = (): React.ReactElement => {	const { goTo } = useCustomNavigate();	const { t } = useTranslation();	return (		<>			<Header />			<div className={'container'}>				<div className={styles['home-container']}>					<Info						title={t('SAVE_MONEY_BY_WRITING')}						bgImage={saveMoney}						description={t(							'SPEND_1_MINUTE_AFTER_THE_PURCHASE_BY_WRITING_DOWN_THE_WASTE_YOU_WILL_SAVE_WEALTH',						)}						reverse={true}					/>					<section className={styles['how-work']}>						<Title className={styles['how-work-title']} title={t('HOW_IT_WORK')} size={'h1'} />						<div className={styles['cards-inner']}>							<Card								icon={iconPhone}								title={t('SET_UP_AN_ACCOUNT')}								description={t('SIGN_UP_AND_VERIFY_YOUR_ACCOUNT')}								color={'primary'}							/>							<Arrow type={'withCircle'} />							<Card								icon={iconNote}								title={t('CREATING_A_WALLET_WITHOUT_BINDING_REAL_ACCOUNT')}								description={t('CREATE_A_WALLET_IN_WITCH_YOUR_EXPENSES_WILL_BE_SAVED')}								color={'orange'}							/>							<Arrow type={'withCircle'} />							<Card								icon={iconMoney}								title={t('GET_FULL_CONTROL_OF_YOUR_FOUNDS')}								description={t('WEEKLY_REPORTS_SAVE_HISTORY_TOP_3_CATEGORIES_AND_MORE')}								color={'green'}							/>						</div>					</section>				</div>			</div>			<section className={styles['get-app']}>				<div className={styles['get-app-inner']}>					<p className={styles['get-app-text']}>{t('GET_APPS_JUST_BY_REGISTERING')}</p>					<Button						onClick={(): void => {							goTo('/new-user');						}}						className={styles['get-app__btn-sing_up']}					>						{t('SING_UP')}					</Button>				</div>			</section>			<Footer />		</>	);};