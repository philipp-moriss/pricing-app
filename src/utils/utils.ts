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
