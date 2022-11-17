import { action, makeObservable, observable } from 'mobx';import moment from 'moment';import { CategoryType, ChartDataType, SpendingModel } from 'store/Type/models';import { v1 } from 'uuid';import { HistoryStore } from '../HistoryStore';export class CategoriesStore extends HistoryStore {	categories: CategoryType[] = [		{ _id: v1(), value: 'Food Store' },		{ _id: v1(), value: 'Clothing Shop' },		{ _id: v1(), value: 'Communal services' },		{ _id: v1(), value: 'Entertainment' },		{ _id: v1(), value: 'Auto services' },		{ _id: v1(), value: 'Gifts' },		{ _id: v1(), value: 'Cigarettes and alcohol' },		{ _id: v1(), value: 'Other' },	];	selectedСategories: string[] = [];	walletChartId: string | undefined = '';	chartData: ChartDataType[] = [		{			label: 'Chart',			data: [{ x: '', y: 0 }],		},	];	labels: string[] = [];	constructor() {		super();		makeObservable(this, {			selectedСategories: observable,			labels: observable,			chartData: observable,			walletChartId: observable,			setWalletChartId: action,			setSelectedСategories: action,			transformDataToChartData: action,		});		this.setSelectedСategories = this.setSelectedСategories.bind(this);		this.setWalletChartId = this.setWalletChartId.bind(this);	}	setSelectedСategories(newCategory: string): void {		const checkRepeatSelectedCategories = this.selectedСategories.find(			(category) => category === newCategory,		);		if (checkRepeatSelectedCategories) {			this.selectedСategories = this.selectedСategories.filter(				(category) => category !== checkRepeatSelectedCategories,			);		} else {			this.selectedСategories = [...this.selectedСategories, newCategory];		}	}	transformDataToChartData(data: SpendingModel[]): void {		console.log(data);		const filterByYear = data.filter((a) => moment(a.createdAt).year() === 2022);		const labels: { [key: string]: string } = {};		let currentCurrency = '';		const transformToChartData = filterByYear.reduce((accState: any, currItem) => {			const currCategoryKey = currItem.title;			const currMonth = moment(currItem.createdAt).format('MMMM');			labels[currMonth] = '';			if (!accState[currCategoryKey]) {				accState[currCategoryKey] = {};			}			if (accState[currCategoryKey][currMonth]) {				accState[currCategoryKey][currMonth] =					accState[currCategoryKey][currMonth] + Number(currItem.amount);			} else {				accState[currCategoryKey][currMonth] = Number(currItem.amount);			}			if (!currentCurrency) {				currentCurrency = currItem.currency;			}			return accState;		}, {});		this.labels = Object.keys(labels);		const datasets: ChartDataType[] = [];		for (const transformToChartDataKey in transformToChartData) {			const data = [];			for (const dataKey in transformToChartData[transformToChartDataKey]) {				data.push({ x: dataKey, y: transformToChartData[transformToChartDataKey][dataKey] });			}			datasets.push({ label: `${transformToChartDataKey} ${currentCurrency}`, data: data });		}		this.chartData = datasets;	}	async setWalletChartId(idWallet: string): Promise<void> {		this.walletChartId = idWallet;		const data = await this.getCurrentHistory(idWallet);		this.transformDataToChartData(data);	}	addСategory(category: CategoryType): void {		this.categories.push(category);		return;	}	removeСategory(idCategory: string): void {		const currentCategory = this.categories.findIndex((category) => category._id === idCategory);		this.categories.splice(currentCategory, 1);		return;	}	changeСategory(currentCategory: CategoryType): void {		this.categories.find((category) => {			if (category._id === currentCategory._id) {				category.value = currentCategory.value;			}		});		return;	}	setСategory(categories: CategoryType[]): void {		this.categories = categories;		return;	}}export default new CategoriesStore();