import cs from 'classnames';
import React from 'react';

import styles from './Title.module.scss';

export const Title = ({
	size,
	className,
	title,
	children,
	...props
}: TitleProps): React.ReactElement => {
	const classNames = cs(styles['title'], className);
	switch (size) {
		case 'h1': {
			return (
				<h1 className={classNames} {...props}>
					{title ?? children}
				</h1>
			);
		}
		case 'h2': {
			return (
				<h2 className={classNames} {...props}>
					{title ?? children}
				</h2>
			);
		}
		case 'h3': {
			return (
				<h3
					className={`${styles['title']} ${className} ${styles['title' + `-${size}`]}`}
					{...props}
				>
					{title ?? children}
				</h3>
			);
		}
		case 'h4': {
			return (
				<h4 className={classNames} {...props}>
					{title ?? children}
				</h4>
			);
		}
		case 'h5': {
			return (
				<h5 className={classNames} {...props}>
					{title ?? children}
				</h5>
			);
		}
		default: {
			return (
				<h3 className={classNames} {...props}>
					{title ?? children}
				</h3>
			);
		}
	}
};

type TitleProps = {
	size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
	className?: string;
	title?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
