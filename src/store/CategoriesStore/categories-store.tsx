import { makeAutoObservable } from "mobx";

export type CategoriesType = {
  value: number; // value это id, библиотека React select принимает обьект строго с value и label
  label: string;
};

export class CategoriesStore {
  categories: CategoriesType[] = [
    { value: 1, label: "Food Store" },
    { value: 2, label: "Clothing Shop" },
    { value: 3, label: "Communal services" },
    { value: 4, label: "Entertainment" }, // развлечения
    { value: 5, label: "Auto services" },
    { value: 6, label: "Gifts" },
    { value: 7, label: "Cigarettes and alcohol " },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addСategory(category: CategoriesType): void {
    this.categories.push(category);
    return;
  }

  removeСategory(idCategory: number): void {
    const currentCategory = this.categories.findIndex(
      (category) => category.value === idCategory
    );
    this.categories.splice(currentCategory, 1);
    return;
  }

  changeСategory(currentCategory: CategoriesType): void {
    this.categories.find((category) => {
      if (category.value === currentCategory.value) {
        category.label = currentCategory.label;
      }
    });
    return;
  }

  setСategory(categories: CategoriesType[]): void {
    this.categories = categories;
    return;
  }
}

export default new CategoriesStore();
