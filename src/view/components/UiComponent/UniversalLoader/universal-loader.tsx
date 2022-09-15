import classNames from 'classnames';
import React from 'react';

import './universal-loader.scss';

interface UniversalLoaderProps {
	label?: string;
	labelColor?: string;
	preloaderColor?: string;
	preloaderBgColor?: string;
	position?: string;
	isWithoutContainerBg?: string;
}

const UniversalLoader = ({
	label,
	labelColor,
	preloaderColor,
	preloaderBgColor,
	position,
	isWithoutContainerBg,
}: UniversalLoaderProps) => {
	return (
		<div
			className={classNames({
				loader__container: true,
				'loader__container--withoutBg': isWithoutContainerBg,
			})}
		>
			{!!label && (
				<div
					className={classNames({
						loader__label: true,
						'loader__label-orange': labelColor === 'orange',
					})}
				>
					{label}
				</div>
			)}

			<div
				className={classNames({
					loader: true,
					'loader_color--black': preloaderColor === 'black',
					'loader_bgcolor--blue': preloaderBgColor === 'blue',
					'loader_position--center': position === 'center',
				})}
			/>
		</div>
	);
};

export default UniversalLoader;
