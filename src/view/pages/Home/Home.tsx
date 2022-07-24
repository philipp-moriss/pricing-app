import React from 'react';
import { Header } from '../../components/Header/Header';
import styles from './Home.module.scss';
import bgMoneyPerson from '../../../assets/backgrounds/mony-person.png';
import bgPlainPerson from '../../../assets/backgrounds/plain-person.png';
import { Info } from '../../components/Info/Info';
import { Title } from '../../components/Title/Title';

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
						<Title title={"How it's Work"} size={'h3'} />
						<div>
							<div>card</div>
							<div> {'>'} </div>
							<div>card</div>
							<div> {'>'} </div>
							<div>card</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};
