import React from 'react';

import { ReactComponent as ArrowCicle } from '../../../../assets/icons/arrow-cicle.svg';
import styles from './Arrow.module.scss';

interface IArrowProps {
	type: 'withCircle';
	direction?: 'left' | 'right' | 'bottom' | 'top';
}

export const Arrow = ({ type, direction = 'right' }: IArrowProps): React.ReactElement => {
	const arrows = {
		withCircle: <ArrowCicle />,
	};

	return (
		<div className={`${styles['direction']} ${styles[`direction-${direction}`]}`}>
			{arrows[type]}
		</div>
	);
};
