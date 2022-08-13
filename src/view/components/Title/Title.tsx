import React from 'react';

import styles from './Title.module.scss';

export const Title = ({ size, className, title, ...props }: TitleProps): React.ReactElement => {
	switch (size) {
		case 'h1': {
			return (
				<h1 className={`${styles['title']} ${className}`} {...props}>
					{title}
				</h1>
			);
		}
		case 'h2': {
			return (
				<h2 className={`${styles['title']} ${className}`} {...props}>
					{title}
				</h2>
			);
		}
		case 'h3': {
			return (
				<h3 className={`${styles['title']} ${className}`} {...props}>
					{title}
				</h3>
			);
		}
		case 'h4': {
			return (
				<h4 className={`${styles['title']} ${className}`} {...props}>
					{title}
				</h4>
			);
		}
		case 'h5': {
			return (
				<h5 className={`${styles['title']} ${className}`} {...props}>
					{title}
				</h5>
			);
		}
		default: {
			return (
				<h3 className={`${styles['title']} ${className}`} {...props}>
					{title}
				</h3>
			);
		}
	}
};

type TitleProps = {
	size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
	className?: string;
	title: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
