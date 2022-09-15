import { makeAutoObservable } from 'mobx';
import { LoadingType } from 'store/Type/models';

export class BaseStore {
	isLoading: LoadingType = LoadingType.initial;

	setIsLoading = (isLoading: LoadingType): void => {
		this.isLoading = isLoading;
	};
	constructor() {
		makeAutoObservable(this);
	}
}
export default new BaseStore();
