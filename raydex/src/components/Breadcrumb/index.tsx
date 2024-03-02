import { useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { useLocation, useParams } from 'react-router-dom';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { getPage } from '../../utils/getPage';
import styles from './breadcrumb.module.scss';

const BreadcrumbComponent = () => {
  const navigate = useNavigate();

  const fullPath = useLocation()
    .pathname.split('/')
    .filter((item) => !!item);

  const params = useParams();
  const isHomePage = Object.keys(params).length === 0;
  const results = Object.values(fullPath).map((param, index) => {
    const pageName = getPage(param.toString())?.name;
    const path =
      pageName === 'Применение'
        ? `/${fullPath.slice().join('/')}`
        : `/${fullPath.slice(0, index + 1).join('/')}`;

    return { title: pageName, path: path };
  });

  const breadcrumbItems: ItemType[] = [
    {
      href: '/',
      onClick: () => navigate('/'),
      title: <HomeOutlined />,
    },
    ...results
      .filter((result) => result)
      .map((result) => ({
        onClick: () => navigate(result?.path ? String(result?.path) : ''),
        title: result?.title ?? '',

        href: result?.path ? String(result?.path) : '',
      })),
  ];
  return (
    <>
      {!isHomePage && (
        <div className="wrapper">
          <Breadcrumb className={styles.breadcrumb} items={breadcrumbItems} />
        </div>
      )}
    </>
  );
};

export default BreadcrumbComponent;
