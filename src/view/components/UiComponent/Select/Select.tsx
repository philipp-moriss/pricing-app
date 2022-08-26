import React from 'react';
import styles from 'view/components/UiComponent/Select/Select.module.scss';

export interface SelectProps
	extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
		React.AriaAttributes {
	options: string[];
}

export const Select = ({ options, ...rest }: SelectProps): React.ReactElement => {
	return (
		<select {...rest}>
			<option></option>;
			{options.map((option, index) => {
				return <option key={`${option}-${index}`}>{option}</option>;
			})}
		</select>
	);
};
