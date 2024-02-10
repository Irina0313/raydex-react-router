import { ConfigProvider } from 'antd';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../Header';
import { myTheme } from '../../lib/theme/themeConfig';
import BreadcrumbComponent from '../Breadcrumb';
import FooterComponent from '../Footer';
import styles from './styles.module.scss';

export const Layout = () => (
  <ConfigProvider theme={myTheme}>
    <HeaderComponent />
    <BreadcrumbComponent />
    <main className={styles.main}>
      <Outlet />
    </main>
    <FooterComponent />
  </ConfigProvider>
);
