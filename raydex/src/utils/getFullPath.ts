import { catalog, CatalogItemType } from '../lib/catalog/catalog';
import { getProducts } from './getProducts';

export function findPathByName(
  name: string,
  catalogItems: CatalogItemType[] = catalog,
  pathPrefix = '/catalog',
): string | null {
  for (const item of catalogItems) {
    if (item.name === name || item.id === name) {
      return `${pathPrefix}/${item.path}`;
    }

    if (item.subcategory) {
      const subcategoryPath = findPathByName(
        name,
        item.subcategory,
        `${pathPrefix}/${item.path}`,
      );
      if (subcategoryPath) {
        return subcategoryPath;
      }
    }
    const products = getProducts(item.productsID);
    if (products) {
      for (const product of products) {
        if (product.name === name) {
          return `${pathPrefix}/${item.path}/${product.path}`;
        }
      }
    }
  }

  return null;
}
