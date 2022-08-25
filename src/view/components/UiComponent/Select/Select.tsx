import React from 'react';
import styles from 'view/components/UiComponent/Select/Select.module.scss';

export interface SelectProps
	extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
		React.AriaAttributes {
	options: string[];
	className: string;
}

export const Select = ({ options, className, ...rest }: SelectProps): React.ReactElement => {
	return (
		<select className={`${styles['select']}`} {...rest}>
			<option></option>;
			{options.map((option, index) => {
				return <option key={`${option}-${index}`}>{option}</option>;
			})}
		</select>
	);
};
