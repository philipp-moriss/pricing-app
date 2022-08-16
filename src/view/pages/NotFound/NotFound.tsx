import React from 'react';
import { useNavigate } from 'react-router-dom';

import page404Image from '../../../assets/backgrounds/404-error.png';
import { Button } from '../../components/UiComponent/Button/Button';
import styles from './NotFound.module.scss';

export const NotFound = (): React.ReactElement => {
	const navigate = useNavigate();

	return (
		<div className={styles['container']}>
			<div className={styles['not-found']}>
				<img src={page404Image} alt="404 not found" />
				<h6 className={styles['not-found_text']}>Oops, This Page Could Not Be Found.</h6>
				<span className={styles['not-found_description']}>
					The page you are looking for might have been removed, had its name changed, or is
					temporarily unavailable.
				</span>
				<Button onClick={(): void => navigate('/')} textBtn={'Back to Home'} />
			</div>
		</div>
	);
};
