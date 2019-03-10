import rawData from './content';

export interface Item {
  name: string;
  selected: boolean;
}

export interface Items {
  [key: string]: Item;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  items: {
    [key: string]: Item;
  };
}

export interface Categories {
  [key: string]: Category;
}

export function getSuggestedItems(locale: string, currentState?: Categories) {
  const categories: Categories = {};

  for (let i = 0; i < rawData.length; i++) {
    const category = rawData[i];
    const newCategory: Category = {
      id: `${i}`,
      name: category.name[locale],
      color: category.color,
      items: {},
    };
    for (let j = 0; j < category.items.length; j++) {
      const name = category.items[j][locale];
      let selected = currentState ? currentState[i].items[j].selected : true;
      newCategory.items[j] = { name, selected };
    }
    categories[`${i}`] = newCategory;
  }
  return categories;
}
