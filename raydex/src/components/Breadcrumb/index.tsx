import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { getPage } from '../../utils/getPage';
import styles from './breadcrumb.module.scss';

const BreadcrumbComponent = () => {
  const fullPath = useLocation()
    .pathname.split('/')
    .filter((item) => !!item);

  const params = useParams();
  const isHomePage = Object.keys(params).length === 0;
  const results = Object.values(fullPath).map((param, index) => {
    const path = fullPath.slice(0, index + 1).join('/');
    const pageName = getPage(param.toString())?.name;

    return { title: pageName, path: `/${path}` };
  });

  const breadcrumbItems: ItemType[] = [
    {
      href: '/',
      title: (
        <Link to='/'>
          <HomeOutlined />
        </Link>
      ),
    },
    ...results
      .filter((result) => result)
      .map((result) => ({
        title: (
          <Link to={result?.path ? String(result?.path) : ''}>
            {result?.title ?? ''}
          </Link>
        ),
        href: result?.path ? String(result?.path) : '',
      })),
  ];
  return (
    <>
      {!isHomePage && (
        <div className='wrapper'>
          <Breadcrumb className={styles.breadcrumb} items={breadcrumbItems} />
        </div>
      )}
    </>
  );
};

export default BreadcrumbComponent;
