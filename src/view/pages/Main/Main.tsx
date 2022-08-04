import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import page404Image from '../../../assets/backgrounds/404-error.png';
import AuthStore from '../../../store/auth-store';
import { Button } from '../../components/Button/Button';
import styles from './Main.module.scss';

export const Main = observer((): React.ReactElement => {
	const navigate = useNavigate();

	return (
		<div className={styles['container']}>
			{!AuthStore.auth && <Navigate to="/login" replace={true} />}
			<div className={styles['not-found']}>
				<img src={page404Image} alt="404 not found" />
				<h6 className={styles['not-found_text']}>MAIN</h6>

				<Button
					onClick={() => {
						AuthStore.removeAuth();
						navigate('/');
					}}
					textBtn={'Log down'}
				/>
			</div>
		</div>
	);
});
