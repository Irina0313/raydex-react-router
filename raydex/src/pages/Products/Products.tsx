import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import { catalog } from '../../lib/catalog/catalog';
import { getProducts } from '../../utils/getProducts';

const wrapperStyle: React.CSSProperties = {
  display: 'flex',
  gap: '20px',
};

export const Products = () => {
  const params = useParams();
  const category = catalog.filter((p) => p.path === params.category)[0];
  const subcategory = category.subcategory?.filter(
    (s) => s.path === params.products,
  )[0];
  const products = getProducts(subcategory?.productsID);

  return (
    <div style={wrapperStyle}>
      {products && <ProductCard category={products} imagePathPrefix="../../" />}
    </div>
  );
};
