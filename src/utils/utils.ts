import { MyCategoriesType } from 'store/Type/models';

export const sortCategoriesByAmount = (categories: MyCategoriesType[]): MyCategoriesType[] => {
	if (!categories) return [];
	return [...categories].sort((a, b) => b.amount - a.amount);
};
export const dateFormat = (date: Date): string => {
	return date.toLocaleDateString('az-Cyrl-AZ');
};
export const getDateFormatTime = (date: Date): string => {
	return date.toLocaleTimeString('en-US');
};
export const getUniqueId = (): number => {
	const id = `${new Date().getUTCMilliseconds()}${new Date().getUTCMilliseconds()}`;
	return +id;
};
