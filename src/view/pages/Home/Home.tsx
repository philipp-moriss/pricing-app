import React from 'react';
import { Header } from '../../components/HomeHeader/Header';
import styles from './Home.module.scss';
import bgMoneyPerson from '../../../assets/backgrounds/mony-person.png';
import bgPlainPerson from '../../../assets/backgrounds/plain-person.png';
import iconNote from '../../../assets/icons/note.svg';
import iconPhone from '../../../assets/icons/phone.svg';
import iconMoney from '../../../assets/icons/mone.svg';
import { Info } from '../../components/Info/Info';
import { Title } from '../../components/Title/Title';
import { Card } from '../../components/Card/Card';
import { Arrow } from '../../components/Arrow/Arrow';

export const Home = (): React.ReactElement => {
	return (
		<>
			<Header />
			<div className={'container'}>
				<div className={styles['home-container']}>
					<Info
						title={'Start Saving Money'}
						bgImage={bgMoneyPerson}
						description={'Start use on desktop and mobile'}
					/>
					<Info
						title={'Save Money By Writing'}
						bgImage={bgPlainPerson}
						description={
							'spend 1 minute after the purchase by writing down the waste you will save wealth'
						}
						reverse={true}
					/>
					<section className={styles['how-work']}>
						<Title className={styles['how-work-title']} title={"How it's Work"} size={'h3'} />
						<div className={styles['cards-inner']}>
							<Card
								icon={iconPhone}
								title={'Set up an account'}
								description={'Download the app for free, sign up and verify your account.'}
								color={'primary'}
							/>

							<Arrow type={'withCircle'} />

							<Card
								icon={iconNote}
								title={'Apply for a loan'}
								description={
									'Apply for a loan and our technology will run a credit score and decide if you are qualified.'
								}
								color={'orange'}
							/>

							<Arrow type={'withCircle'} />

							<Card
								icon={iconMoney}
								title={'Get your cash'}
								description={'If you qualify, your loan will be disbursed to your wallet.'}
								color={'green'}
							/>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};
