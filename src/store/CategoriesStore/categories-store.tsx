import { makeAutoObservable } from 'mobx';import { CategoryType } from 'store/Type/models';import { v1 } from 'uuid';export class CategoriesStore {	categories: CategoryType[] = [		{ value: v1(), label: 'Food Store' },		{ value: v1(), label: 'Clothing Shop' },		{ value: v1(), label: 'Communal services' },		{ value: v1(), label: 'Entertainment' },		{ value: v1(), label: 'Auto services' },		{ value: v1(), label: 'Gifts' },		{ value: v1(), label: 'Cigarettes and alcohol' },		{ value: v1(), label: 'Other' },	];	constructor() {		makeAutoObservable(this);	}	addСategory(category: CategoryType): void {		this.categories.push(category);		return;	}	removeСategory(idCategory: string): void {		const currentCategory = this.categories.findIndex((category) => category.value === idCategory);		this.categories.splice(currentCategory, 1);		return;	}	changeСategory(currentCategory: CategoryType): void {		this.categories.find((category) => {			if (category.value === currentCategory.value) {				category.label = currentCategory.label;			}		});		return;	}	setСategory(categories: CategoryType[]): void {		this.categories = categories;		return;	}}export default new CategoriesStore();