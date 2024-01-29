import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import { catalog } from '../../lib/catalog/catalog';
import { getProducts } from '../../utils/getProducts';
import { Product } from '../Product';

const wrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  gap: '20px',
};
interface IProductsParams {
  handleProductPage: (param: boolean) => void;
}

export const Products = ({ handleProductPage }: IProductsParams) => {
  handleProductPage(false);
  const params = useParams();
  console.log('Products');
  const category = catalog.filter((p) => p.path === params.category)[0];
  const subcategory = category.subcategory?.filter(
    (s) => s.path === params.products
  )[0];
  const products = getProducts(subcategory?.productsID);
  const categoryProduct =
    category.productsID && getProducts(category.productsID);

  return (
    <>
      {subcategory && (
        <div style={wrapperStyle}>
          {products && (
            <ProductCard category={products} imagePathPrefix='../../' />
          )}
        </div>
      )}
      {categoryProduct && <Product handleProductPage={handleProductPage} />}
    </>
  );
};
