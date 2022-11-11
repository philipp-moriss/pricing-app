import {	BarElement,	CategoryScale,	Chart as ChartJS,	ChartOptions,	Legend,	LinearScale,	TimeScale,	Title,	Tooltip,} from 'chart.js';// eslint-disable-next-line @typescript-eslint/ban-ts-comment// @ts-ignoreimport autocolors from 'chartjs-plugin-autocolors';import { observer } from 'mobx-react-lite';import React from 'react';import { Bar } from 'react-chartjs-2';import CategoriesStore from '../../../../store/CategoriesStore/categories-store';import styles from './Chart.module.scss';ChartJS.register(	CategoryScale,	LinearScale,	BarElement,	Title,	Tooltip,	Legend,	autocolors,	TimeScale,);export const Chart = observer((): React.ReactElement => {	const { chartData } = CategoriesStore;	const data = {		labels: [			'January',			'February',			'March',			'April',			'May',			'June',			'July',			'August',			'September',			'October',			'November',		],		datasets: chartData,		borderWidth: 1,	};	return (		<div className={styles['chart']}>			{/*// eslint-disable-next-line @typescript-eslint/ban-ts-comment				// @ts-ignore*/}			<Bar data={data} />		</div>	);});