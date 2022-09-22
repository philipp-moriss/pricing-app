import { action, makeObservable, observable } from 'mobx';
import { LoadingType } from 'store/Type/models';

export class BaseStore {
	isLoading: LoadingType = LoadingType.initial;

	setIsLoading = (isLoading: LoadingType): void => {
		this.isLoading = isLoading;
	};
	constructor() {
		makeObservable(this, {
			isLoading: observable,
			setIsLoading: action,
		});
	}
}
export default new BaseStore();
