import addImg from 'assets/images/add-circle.png';import { observer } from 'mobx-react-lite';import React, { useEffect, useState } from 'react';import { useTranslation } from 'react-i18next';import AuthStore from 'store/AuthStore';import { NewWalletType } from 'store/Type/models';import WalletStore from 'store/WalletStore/wallet-store';import { CustomInput } from 'view/components/UiComponent/CustomInput/CustomInput';import { ModalWrapper } from 'view/components/UiComponent/ModalWrapper/modal-wrapper';import { Title } from 'view/components/UiComponent/Title/Title';import { Wallet } from 'view/pages/Main/Wallet/Wallet/Wallet';import { useResizeWindow } from '../../../../utils/hooks/useCustomNav';import { ExpenseAccounting } from '../WorkSpace/ExpenseAccounting/ExpenseAccounting';import styles from './Wallets.module.scss';export const Wallets = observer((): React.ReactElement => {	const size = useResizeWindow();	const hiddenSpendingMenu = size.width < 914;	const { wallets, getWallets, addWallet, getCurrencyList, allCurrencyList } = WalletStore;	const { user } = AuthStore;	const [addWalletModal, setAddWalletModal] = useState(false);	const [newWallet, setNewWallet] = useState<NewWalletType>({		userId: user._id,		name: '',		balance: null as unknown as number,		currency: '',	});	const { t } = useTranslation();	const saveWallet = (): void => {		addWallet(newWallet).then(() => {			getWallets(user._id);		});		setAddWalletModal(false);		setNewWallet({			userId: user._id,			name: '',			balance: null as unknown as number,			currency: '',		});	};	const addWalletHandler = (value: string | number, key: string): void => {		setNewWallet((prevState) => {			return {				...prevState,				[key]: value,			};		});	};	useEffect(() => {		getWallets(user._id);	}, []);	useEffect(() => {		if (!allCurrencyList && addWalletModal) {			getCurrencyList();		}	}, [addWalletModal]);	return (		<>			<div className={styles['wallets']}>				<img					className={styles['wallets__add-wallet-img']}					src={addImg}					onClick={(): void => setAddWalletModal(true)}				/>				<div className={styles['wallets__wallet-section']}>					{wallets &&						wallets.map((wallet) => {							return (								<Wallet									key={wallet._id}									idWallet={wallet._id}									name={wallet.name}									balance={wallet.balance}									currency={wallet.currency}									totalSpends={wallet.totalSpends}									createDate={wallet.createdAt}								/>							);						})}				</div>				{!hiddenSpendingMenu && !!wallets?.length && <ExpenseAccounting />}			</div>			{addWalletModal && (				<ModalWrapper					callBackSave={saveWallet}					closeCallback={(): void => setAddWalletModal(false)}					textBtnDontSave={'Not save'}					textBtnSave={'Save'}				>					<div className={styles['wallets__wallet-modal']}>						<Title size={'h1'}>Create a new wallet</Title>						<CustomInput							type={'text'}							placeholder={'Name wallet'}							value={newWallet?.name ?? ''}							onChange={(e): void => addWalletHandler(e.currentTarget.value, 'name')}						/>						<CustomInput							type={'text'}							placeholder={'Balance for wallet'}							value={newWallet?.balance ?? ''}							onChange={(e): void => addWalletHandler(e.currentTarget.value, 'balance')}						/>						<select onChange={(e): void => addWalletHandler(e.currentTarget.value, 'currency')}>							<option value={''}>Pick currency</option>							{allCurrencyList?.map((currency) => {								return (									<option key={currency._id} value={currency.value}>										{currency.value}									</option>								);							})}						</select>					</div>				</ModalWrapper>			)}		</>	);});