import wallet from 'assets/images/wallet.png';
import React, { ChangeEvent, useState } from 'react';
import { Autosuggest } from 'view/components/UiComponent/Autosuggest/Autosuggest';
import { Button } from 'view/components/UiComponent/Button/Button';
import { CustomInput } from 'view/components/UiComponent/CustomInput/CustomInput';
import { Title } from 'view/components/UiComponent/Title/Title';
import { TotalAmount } from 'view/pages/Main/Wallet/TotalAmount/TotalAmount';

import styles from './Wallet.module.scss';

export const Wallet = (): React.ReactElement => {
	const [spendData, setSpendData] = useState<{ spend: number | undefined; categories: any }>({
		spend: undefined,
		categories: {},
	});

	const spendHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.currentTarget;
		if (!value) {
			setSpendData({ ...spendData, spend: undefined });
		} else {
			setSpendData({ ...spendData, spend: +e.currentTarget.value });
		}
	};

	const saveHandler = (): void => {
		console.log(spendData);
	};

	return (
		<div className={styles['wallet']}>
			<div className={styles['wallet__wrapper']}>
				<div className={styles['wallet__body']}>
					<Title title={'Your wallet'} size={'h3'} />
					<Autosuggest
						label={'Category selection'}
						options={[]}
						callBack={(value): void => {
							setSpendData({ ...spendData, categories: value?.value });
						}}
					/>
					<CustomInput
						label={'The amount you spend'}
						type={'number'}
						value={spendData.spend ?? ''}
						onChange={(e): void => spendHandler(e)}
					/>
					<Button textBtn={'Save'} onClick={saveHandler} />
				</div>
			</div>
			<TotalAmount />
		</div>
	);
};
