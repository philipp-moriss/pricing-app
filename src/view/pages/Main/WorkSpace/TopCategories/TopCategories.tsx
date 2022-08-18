import { observer } from 'mobx-react-lite';
import React from 'react';
import WalletStore from 'store/WalletStore';
import { sortCategoriesByAmount } from 'utils/utils';
import { Title } from 'view/components/UiComponent/Title/Title';

import styles from './TopCategories.module.scss';

export const TopCategories = observer((): React.ReactElement => {
	const { wallet } = WalletStore;
	const topCategories = sortCategoriesByAmount(wallet?.myCategories)?.splice(0, 3);
	return (
		<div className={styles['top-categories']}>
			<div className={styles['top-categories__wrapper']}>
				<Title title={'Top three expense categories'} size={'h3'} />
				<div className={styles['top-categories__body']}>
					{topCategories &&
						topCategories.map((category, index) => {
							return (
								<div
									key={`${category.category.label}-${index}`}
									className={styles['top-categories__body__categories-block']}
								>
									<span>{category.category.label}&nbsp;&nbsp;</span>
									<span>{category.amount}</span>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
});
