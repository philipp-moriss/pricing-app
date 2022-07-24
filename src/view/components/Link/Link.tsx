import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './Link.module.scss';

export const CustomLink = ({ linkText, ...props }: CustomLinkProps): React.ReactElement => {
	return (
		<Link className={styles['link']} {...props}>
			{linkText}
		</Link>
	);
};

type CustomLinkProps = LinkProps & { linkText: string };
