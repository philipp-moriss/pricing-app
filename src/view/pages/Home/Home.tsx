import React, { useEffect } from 'react';
import { useCustomNavigate } from 'utils/hooks/useCustomNav';
import { Card } from 'view/components/Card/Card';
import { Footer } from 'view/components/Footer/Footer';
import { Header } from 'view/components/HomeHeader/Header';
import { Info } from 'view/components/Info/Info';
import { Arrow } from 'view/components/UiComponent/Arrow/Arrow';
import { Button } from 'view/components/UiComponent/Button/Button';
import { Title } from 'view/components/UiComponent/Title/Title';

import { axiosInstance } from '../../../api/api';
import bgMoneyPerson from '../../../assets/backgrounds/mony-person.png';
import bgPlainPerson from '../../../assets/backgrounds/plain-person.png';
import iconMoney from '../../../assets/icons/mone.svg';
import iconNote from '../../../assets/icons/note.svg';
import iconPhone from '../../../assets/icons/phone.svg';
import styles from './Home.module.scss';

export const Home = (): React.ReactElement => {
	useEffect(() => {
		axiosInstance
			.get('wallet', {
				params: { walletId: '1' },
			})
			.then((response) => {
				console.log(response.data);
			});
	}, []);

	const { goTo } = useCustomNavigate();
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
			<section className={styles['get-app']}>
				<div className={styles['get-app-inner']}>
					<p className={styles['get-app-text']}>get apps just by registering</p>
					<Button
						onClick={(): void => {
							goTo('/new-user');
						}}
						textBtn={'SingUp'}
						style={{ color: 'black', backgroundColor: 'white' }}
					/>
				</div>
			</section>
			<Footer />
		</>
	);
};
