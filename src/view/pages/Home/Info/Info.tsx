import React from 'react';

import { Title } from '../UiComponent/Title/Title';
import styles from './Info.module.scss';

export const Info = ({
	description,
	bgImage,
	title,
	reverse = false,
}: InfoProps): React.ReactElement => {
	return (
		<section className={`${styles['started']} ${reverse && styles['started-reverse']}`}>
			<div className={styles['started-info']}>
				<Title size={'h3'} title={title} />
				<p className={styles['text']}>{description}</p>
			</div>
			<div className={styles['started-bg']}>
				<img src={bgImage} />
			</div>
		</section>
	);
};

type InfoProps = {
	title: string;
	description: string;
	bgImage: string;
	reverse?: boolean;
};
