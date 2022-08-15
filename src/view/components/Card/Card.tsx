import styles from './Card.module.scss';
import React from 'react';

export const Card = ({
	color = 'primary',
	title,
	description,
	icon,
}: ICard): React.ReactElement => {
	const renderIcon = typeof icon === 'string' ? <img src={icon} /> : icon;

	return (
		<div className={styles['card']}>
			<div className={`${styles['card-line']} ${styles[`card-line-${color}`]}`} />
			<div className={styles['card-container']}>
				<div className={styles['card-logo']}>{renderIcon}</div>
				<span className={styles['card-title']}>{title}</span>
				<p className={styles['card-text']}>{description}</p>
			</div>
		</div>
	);
};

interface ICard {
	children?: React.ReactNode;
	icon: React.ReactNode | string;
	color?: 'primary' | 'orange' | 'green';
	title: string;
	description: string;
}
