import { Flex } from 'antd';

import { useParams } from 'react-router-dom';
import { getProducts } from '../../utils/getProducts';
import { catalog } from '../../lib/catalog/catalog';
import ProductCard from '../../components/ProductCard';

interface ICategoryParams {
  handleProductPage: (param: boolean) => void;
}

export const Category = ({ handleProductPage }: ICategoryParams) => {
  handleProductPage(false);
  const params = useParams();

  const currCategory = catalog.filter((p) => p.path === params.category)[0];
  const productsID = currCategory.productsID;
  const subcategory = currCategory.subcategory?.flatMap((p) =>
    getProducts(p.productsID)
  );
  const currCategoryProducts = getProducts(currCategory.productsID);

  return (
    <>
      <Flex wrap='wrap' gap={50} justify='center'>
        {subcategory && (
          <ProductCard category={subcategory} imagePathPrefix='../' />
        )}
        {productsID && (
          <ProductCard category={currCategoryProducts} imagePathPrefix='../' />
        )}
      </Flex>
    </>
  );
};
