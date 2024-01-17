import { Flex } from "antd";

import { useParams } from "react-router-dom";
import { getProducts } from "../../utils/getProducts";
import { catalog } from "../../lib/catalog/catalog";
import ProductCard from "../../components/ProductCard";

export const Category = () => {
  const params = useParams();

  const currCategory = catalog.filter((p) => p.path === params.category)[0];
  const subcategory =
    currCategory.subcategory &&
    currCategory.subcategory?.flatMap((p) => getProducts(p.productsID));

  return (
    <>
      <Flex wrap="wrap" gap={50} justify="center">
        {subcategory && (
          <ProductCard category={subcategory} imagePathPrefix="../" />
        )}
      </Flex>
    </>
  );
};
