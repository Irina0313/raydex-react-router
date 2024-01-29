import { catalog } from '../lib/catalog/catalog';
import { CatalogItemType } from '../lib/catalog/catalog';
import { ProductItemType } from '../lib/catalog/products/01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';
import { usageAreas } from '../lib/constants';
import { pages } from '../lib/constants';
import { getProducts } from './getProducts';

export function getPage(path: string):
  | {
      key: string;
      name: string;
    }
  | CatalogItemType
  | ProductItemType
  | null {
  /*  console.log(
    path,
    catalog
      .filter((p) => p.productsID)
      .flatMap((p) => getProducts(p.productsID))
      .find((p) => p?.path === path)
    
  ); */

  const page =
    pages.find((p) => p.key === path) ||
    catalog.find((p) => p.path === path) ||
    catalog.flatMap((p) => p.subcategory).find((s) => s?.path === path) ||
    catalog
      .filter((p) => p.productsID)
      .flatMap((p) => getProducts(p.productsID))
      .find((p) => p?.path === path) ||
    catalog
      .flatMap((p) => p.subcategory)
      .flatMap((prod) => getProducts(prod?.productsID))
      .find((prodPath) => prodPath?.path === path) ||
    usageAreas.find((p) => p.key === path);
  console.log(path, page);
  return page || null;
}

export { pages };
