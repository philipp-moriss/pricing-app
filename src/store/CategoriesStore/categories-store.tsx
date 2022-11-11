import { action, makeObservable, observable } from 'mobx';import moment from 'moment';import { CategoryType, SpendingModel } from 'store/Type/models';import { v1 } from 'uuid';import { WalletStore } from '../WalletStore';export class CategoriesStore extends WalletStore {	categories: CategoryType[] = [		{ _id: v1(), value: 'Food Store' },		{ _id: v1(), value: 'Clothing Shop' },		{ _id: v1(), value: 'Communal services' },		{ _id: v1(), value: 'Entertainment' },		{ _id: v1(), value: 'Auto services' },		{ _id: v1(), value: 'Gifts' },		{ _id: v1(), value: 'Cigarettes and alcohol' },		{ _id: v1(), value: 'Other' },	];	selectedСategories: string[] = [];	walletChartId: string | undefined = '';	chartData: any[] = [];	labels: string[] = [];	constructor() {		super();		makeObservable(this, {			selectedСategories: observable,			labels: observable,			chartData: observable,			walletChartId: observable,			setWalletChartId: action,			setSelectedСategories: action,			transformationDataToChart: action,		});		this.setSelectedСategories = this.setSelectedСategories.bind(this);		this.setWalletChartId = this.setWalletChartId.bind(this);	}	setSelectedСategories(newCategory: string): void {		const checkRepeatSelectedCategories = this.selectedСategories.find(			(category) => category === newCategory,		);		if (checkRepeatSelectedCategories) {			this.selectedСategories = this.selectedСategories.filter(				(category) => category !== checkRepeatSelectedCategories,			);		} else {			this.selectedСategories = [...this.selectedСategories, newCategory];		}	}	transformationDataToChart(data: SpendingModel[]): void {		const filterByYear = data.filter((a) => moment(a.createdAt).year() === 2022);		const labels = {};		// eslint-disable-next-line @typescript-eslint/ban-ts-comment		// @ts-ignore		const transformToChartData = filterByYear.reduce((accState: any, currItem) => {			const currCategoryKey = currItem.title;			const currMonth = moment(currItem.createdAt).format('MMMM');			// eslint-disable-next-line @typescript-eslint/ban-ts-comment			// @ts-ignore			labels[currMonth] = '';			if (!accState[currCategoryKey]) {				accState[currCategoryKey] = {};			}			if (accState[currCategoryKey][currMonth]) {				accState[currCategoryKey][currMonth] =					accState[currCategoryKey][currMonth] + Number(currItem.amount);			} else {				accState[currCategoryKey][currMonth] = Number(currItem.amount);			}			return accState;		}, {});		this.labels = Object.keys(labels);		const datasets: any[] = [];		for (const transformToChartDataKey in transformToChartData) {			const data = [];			for (const dataKey in transformToChartData[transformToChartDataKey]) {				data.push({ x: dataKey, y: transformToChartData[transformToChartDataKey][dataKey] });			}			datasets.push({ label: transformToChartDataKey, data: data });		}		console.log(datasets);		this.chartData = datasets;	}	async setWalletChartId(idWallet: string): Promise<void> {		this.walletChartId = idWallet;		try {			const allSpendCurrentWallet = await this.getCurrentHistory(idWallet);			this.transformationDataToChart(allSpendCurrentWallet);		} catch (e) {			console.log(e);		}		return;	}	addСategory(category: CategoryType): void {		this.categories.push(category);		return;	}	removeСategory(idCategory: string): void {		const currentCategory = this.categories.findIndex((category) => category._id === idCategory);		this.categories.splice(currentCategory, 1);		return;	}	changeСategory(currentCategory: CategoryType): void {		this.categories.find((category) => {			if (category._id === currentCategory._id) {				category.value = currentCategory.value;			}		});		return;	}	setСategory(categories: CategoryType[]): void {		this.categories = categories;		return;	}}export default new CategoriesStore();