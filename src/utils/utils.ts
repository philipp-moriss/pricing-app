import { ChangeEvent, useEffect, useState } from 'react';

export const dateFormat = (date: Date): string => {
	return date.toLocaleDateString('az-Cyrl-AZ');
};
export const getDateFormatTime = (date: Date): string => {
	return date.toLocaleTimeString('en-US');
};

export const convertToDate = (dateString: string): Date => {
	return new Date(dateString);
};
export const validateEmail = (email: string) => {
	const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
	return regex.test(email.toLowerCase());
};
type UseInputReturnType = {
	value: string;
	onChange: (e: any) => void;
	onBlur: (e: FocusEvent) => void;
	isDirty: boolean;
	valid: UseValidationReturnType;
};
export const useInput = (
	initValue: string,
	validations: { isEmpty: boolean; minLength?: number; maxLength?: number; isEmail?: boolean },
): UseInputReturnType => {
	const [isDirty, setDirty] = useState(false);
	const [value, setValue] = useState<string>('');
	const valid = useValidation(value, validations);
	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setValue(e.currentTarget.value);
	};
	const onBlur = (e: FocusEvent): void => {
		setDirty(true);
	};
	return {
		value,
		onChange,
		onBlur,
		isDirty,
		valid,
	};
};

type UseValidationReturnType = {
	isEmpty: boolean;
	minLengthError: boolean;
	emailError: boolean;
	maxLengthError: boolean;
	inputValid: boolean;
};

export const useValidation = (
	value: string,
	validations: { isEmpty: boolean; minLength?: number; maxLength?: number; isEmail?: boolean },
): UseValidationReturnType => {
	const [isEmpty, setEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(false);
	const [maxLengthError, setMaxLengthError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [inputValid, setInputValid] = useState(false);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength': {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					value.length < validations[validation]
						? setMinLengthError(true)
						: setMinLengthError(false);
					break;
				}
				case 'maxLength': {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					value.length < validations[validation]
						? setMaxLengthError(true)
						: setMaxLengthError(false);
					break;
				}
				case 'isEmpty': {
					value ? setEmpty(false) : setEmpty(true);
					break;
				}
				case 'isEmail': {
					validateEmail(value) ? setEmailError(false) : setEmailError(true);
					break;
				}
			}
		}
	}, [value]);
	useEffect(() => {
		if (isEmpty || maxLengthError || minLengthError || emailError) {
			setInputValid(false);
		} else {
			setInputValid(true);
		}
	}, [isEmpty, minLengthError, maxLengthError, emailError]);
	return {
		isEmpty,
		minLengthError,
		emailError,
		maxLengthError,
		inputValid,
	};
};
