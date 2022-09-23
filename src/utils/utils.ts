export const dateFormat = (date: Date): string => {
	return date.toLocaleDateString('az-Cyrl-AZ');
};
export const getDateFormatTime = (date: Date): string => {
	return date.toLocaleTimeString('en-US');
};

export const convertToDate = (dateString: string): Date => {
	return new Date(dateString);
};
