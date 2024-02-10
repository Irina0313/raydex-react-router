import { productsList } from '../lib/catalog/catalog';
import { ProductItemType } from '../lib/catalog/products/01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';

export const getProducts = (prodId = ''): ProductItemType[] | undefined => {
  if (prodId) {
    /*    console.log(
      'prodId',
      prodId,
      'getProducts',
      productsList.filter((p) => p.id === prodId)[0]
    ); */
    const prod = productsList.filter((p) => p.id === prodId)[0];
    return 'value' in prod ? prod.value : undefined;
  }
  return undefined;
};
