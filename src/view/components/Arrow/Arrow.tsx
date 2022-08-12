import React from 'react';
import styles from './Arrow.module.scss';

interface IArrowProps {
	type: 'withCircle';
	direction?: 'left' | 'right' | 'bottom' | 'top';
}

export const Arrow = ({ type, direction = 'right' }: IArrowProps): React.ReactElement => {
	const arrows = {
		withCircle: (
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
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	};

	return (
		<div className={`${styles['direction']} ${styles[`direction-${direction}`]}`}>
			{arrows[type]}
		</div>
	);
};
