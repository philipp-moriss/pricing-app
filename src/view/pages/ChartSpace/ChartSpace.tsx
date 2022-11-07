import React from 'react';import { ChartInfo } from '../../components/ChartInfo/ChartInfo';import { Chart } from '../../components/Moleculs/Chart/Chart';import style from './ChartSpace.module.scss';export const ChartSpace = (): React.ReactElement => {	return (		<div className={style['chart-space']}>			<Chart />			<ChartInfo />		</div>	);};