import { ProductItemType } from "../lib/catalog/products/01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters";
import { getProducts } from "./getProducts";

interface IGetProductByCodeProps {
  productsID: string;
  code: string;
}

export const getProductByCode = ({
  ...props
}: IGetProductByCodeProps): ProductItemType | undefined => {
  const { productsID, code } = props;

  const products = getProducts(productsID);
  return products && products.find((p) => p.code === code);
};
