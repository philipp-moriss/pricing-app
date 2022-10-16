import cs from 'classnames';
import React from 'react';

import styles from './Select.module.scss';

export interface SelectProps
	extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
		React.AriaAttributes {
	options: any[];
	error?: boolean;
	placeholder: string;
}

export const Select = ({
	options,
	error,
	className,
	placeholder,
	...rest
}: SelectProps): React.ReactElement => {
	const classNames = cs(styles['select'], { [styles['error']]: error }, className);
	return (
		<select className={classNames} {...rest}>
			<option className={styles['select_default-value']} value={''}>
				{placeholder}
			</option>
			{options.map((option, index) => {
				return <option key={`${option}-${index}`}>{option.value}</option>;
			})}
		</select>
	);
};
