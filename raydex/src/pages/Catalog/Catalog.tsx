import { Card, Flex, Layout } from 'antd';

import Link from 'antd/es/typography/Link';
import { CatalogItemType, catalog } from '../../lib/catalog/catalog';
import { getProducts } from '../../utils/getProducts';
import { findPathByName } from '../../utils/getFullPath';
import { Outlet, useLocation } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import CatalogNavigation from '../../components/CatalogNavigation';

const { Meta } = Card;

const productsAmount = (
  subcategory: CatalogItemType[] | CatalogItemType | undefined
) => {
  const getItemsAmount = () => {
    let amount = 0;
    if (subcategory && Array.isArray(subcategory)) {
      amount += subcategory.flatMap((s) => getProducts(s.productsID)).length;
    }
    if (subcategory && !Array.isArray(subcategory)) {
      const categ = getProducts(subcategory.productsID);
      if (categ && Array.isArray(categ)) {
        amount += categ.length;
      }
    }
    return amount;
  };

  const categories = getItemsAmount();

  let items = 'товар';
  const ends = {
    ов: ['0', '5', '6', '7', '8', '9'],
    а: ['2', '3', '4'],
  };

  if (ends.ов.includes(categories.toString().slice(-1))) {
    items += 'ов';
  }
  if (ends.а.includes(categories.toString().slice(-1))) {
    items += 'а';
  }
  return `${categories} ${items}`;
};

const siderStyle: React.CSSProperties = {
  width: '450px',
  lineHeight: '120px',
  backgroundColor: '#fff',
};

interface ICatalogParams {
  isProductPage: boolean;
  handleProductPage: (param: boolean) => void;
}
const Catalog = ({ isProductPage, handleProductPage }: ICatalogParams) => {
  handleProductPage(false);

  const location = useLocation();
  // console.log("location", location.pathname, "params", params);
  const getImageURL = (p: CatalogItemType): string => {
    const products = getProducts(
      p.subcategory?.[0]?.productsID || p.productsID
    );

    return `${products?.[0]?.images?.[0]}`;
  };

  return (
    <Layout hasSider>
      {!isProductPage && (
        <Sider style={siderStyle} width={350}>
          <CatalogNavigation />
        </Sider>
      )}
      <Layout>
        <Content style={{ margin: '24px 16px', overflow: 'initial' }}>
          <Flex wrap='wrap' gap={50} justify='center'>
            {location.pathname === '/catalog' &&
              catalog.map((p) => (
                <Link key={p.id} href={`${findPathByName(p.name)}`}>
                  <Card
                    hoverable
                    style={{ width: 400, height: 520, padding: '10px' }}
                    cover={
                      <img
                        alt='Фото товара'
                        /* src={`${p.subcategory?.[0]?.products?.[0]?.images?.[0]}`} */
                        src={getImageURL(p)}
                      />
                    }
                  >
                    <Meta
                      title={<div>{p.name}</div>}
                      description={`${
                        p.subcategory
                          ? productsAmount(p.subcategory)
                          : productsAmount(p)
                      }`}
                    />
                  </Card>
                </Link>
              ))}
            <Outlet />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Catalog;
