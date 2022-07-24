import React from 'react';
import { Header } from '../../components/Header/Header';
import styles from './Home.module.scss';
import bgMoneyPerson from '../../../assets/backgrounds/mony-person.png';
import bgPlainPerson from '../../../assets/backgrounds/plain-person.png';
import iconNote from '../../../assets/icons/note.svg';
import iconPhone from '../../../assets/icons/phone.svg';
import iconMoney from '../../../assets/icons/mone.svg';
import { Info } from '../../components/Info/Info';
import { Title } from '../../components/Title/Title';
import { Card } from '../../components/Card/Card';

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
							<svg
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
									fill="#582EFF"
								/>
								<path
									d="M16.1328 12L24.1328 20L16.1328 28"
									stroke="white"
									stroke-width="4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

							<Card
								icon={iconNote}
								title={'Apply for a loan'}
								description={
									'Apply for a loan and our technology will run a credit score and decide if you are qualified.'
								}
								color={'orange'}
							/>
							<svg
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
									fill="#582EFF"
								/>
								<path
									d="M16.1328 12L24.1328 20L16.1328 28"
									stroke="white"
									stroke-width="4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

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
