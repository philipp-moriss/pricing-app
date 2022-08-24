import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useCustomNavigate } from 'utils/hooks/useCustomNav';
import { Card } from 'view/components/Card/Card';
import { Footer } from 'view/components/Footer/Footer';
import { Header } from 'view/components/HomeHeader/Header';
import { Info } from 'view/components/Info/Info';
import { Arrow } from 'view/components/UiComponent/Arrow/Arrow';
import { Button } from 'view/components/UiComponent/Button/Button';
import { Title } from 'view/components/UiComponent/Title/Title';

import bgMoneyPerson from '../../../assets/backgrounds/mony-person.png';
import bgPlainPerson from '../../../assets/backgrounds/plain-person.png';
import iconMoney from '../../../assets/icons/mone.svg';
import iconNote from '../../../assets/icons/note.svg';
import iconPhone from '../../../assets/icons/phone.svg';
import styles from './Home.module.scss';

export const Home = (): React.ReactElement => {
	const { goTo } = useCustomNavigate();

	const { t } = useTranslation();
	return (
		<>
			<Header />
			<div className={'container'}>
				<div className={styles['home-container']}>
					<Info
						title={t('START_SAVING_MONEY')}
						bgImage={bgMoneyPerson}
						description={t('START_USE_ON_DESKTOP_AND_MOBILE')}
					/>
					<Info
						title={t('SAVE_MONEY_BY_WRITING')}
						bgImage={bgPlainPerson}
						description={t(
							'SPEND_1_MINUTE_AFTER_THE_PURCHASE_BY_WRITING_DOWN_THE_WASTE_YOU_WILL_SAVE_WEALTH',
						)}
						reverse={true}
					/>
					<section className={styles['how-work']}>
						<Title className={styles['how-work-title']} title={t('HOW_IT_WORK')} size={'h3'} />
						<div className={styles['cards-inner']}>
							<Card
								icon={iconPhone}
								title={t('SET_UP_AN_ACCOUNT')}
								description={t('DOWNLOAD_THE_APP_FOR_FREE_SIGN_UP_AND_VERIFY_YOUR_ACCOUNT')}
								color={'primary'}
							/>

							<Arrow type={'withCircle'} />

							<Card
								icon={iconNote}
								title={t('APPLY_FOR_A_LOAN')}
								description={t(
									'APPLY_FOR_A_LOAN_AND_OUR_TECHNOLOGY_WILL_RUN_A_CREDIT_SCORE_AND_DECIDE_IF_YOU_ARE_QUALIFIED',
								)}
								color={'orange'}
							/>

							<Arrow type={'withCircle'} />

							<Card
								icon={iconMoney}
								title={t('GET_YOUR_CASH')}
								description={t('IF_YOU_QUALIFY_YOUR_LOAN_WILL_BE_DISBURSED_TO_YOUR_WALLET')}
								color={'green'}
							/>
						</div>
					</section>
				</div>
			</div>
			<section className={styles['get-app']}>
				<div className={styles['get-app-inner']}>
					<p className={styles['get-app-text']}>{t('GET_APPS_JUST_BY_REGISTERING')}</p>
					<Button
						onClick={(): void => {
							goTo('/new-user');
						}}
						textBtn={t('SING_UP')}
						style={{ color: 'black', backgroundColor: 'white' }}
					/>
				</div>
			</section>
			<Footer />
		</>
	);
};
