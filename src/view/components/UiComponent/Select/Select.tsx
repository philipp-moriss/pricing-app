import React from 'react';

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
