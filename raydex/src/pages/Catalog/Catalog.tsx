import { Card, Flex, Layout } from 'antd';

import Link from 'antd/es/typography/Link';
import { CatalogItemType, catalog } from '../../lib/catalog/catalog';
import { getProducts } from '../../utils/getProducts';
import { findPathByName } from '../../utils/getFullPath';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import CatalogNavigation from '../../components/CatalogNavigation';

const { Meta } = Card;

const productsAmount = (subcategory: CatalogItemType[] | undefined) => {
  const categories = subcategory
    ? subcategory.flatMap((s) => getProducts(s.productsID)).length
    : 0;

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

const Catalog = () => {
  const params = useParams();
  const location = useLocation();
  console.log('location', location.pathname, 'params', params);
  const getImageURL = (p: CatalogItemType): string => {
    const products = getProducts(p.subcategory?.[0]?.productsID);

    return `${products?.[0]?.images?.[0]}`;
  };

  return (
    <Layout hasSider>
      <Sider style={siderStyle} width={350}>
        <CatalogNavigation />
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px', overflow: 'initial' }}>
          <Flex wrap="wrap" gap={50} justify="center">
            {location.pathname === '/catalog' &&
              catalog.map((p) => (
                <Link key={p.id} href={`${findPathByName(p.name)}`}>
                  <Card
                    hoverable
                    style={{ width: 400 }}
                    cover={
                      <img
                        alt="Фото товара"
                        /* src={`${p.subcategory?.[0]?.products?.[0]?.images?.[0]}`} */
                        src={getImageURL(p)}
                      />
                    }
                  >
                    <Meta
                      title={p.name}
                      description={`${productsAmount(p.subcategory)}`}
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
