import React, { useState } from 'react';
import { Layout, Menu, Flex, Button } from 'antd';
import {
  LinkedinOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import styles from './header.module.scss';
import { pages } from '../../utils/getPage';
const { Header } = Layout;
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import Logo from '../Logo';
import { Link } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';

const HeaderComponent = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Header className={styles.header}>
      <Flex
        vertical
        justify="center"
        align="center"
        className={`wrapper ${styles.menuWrapper}`}
      >
        <div className={styles.logoRow}>
          <div className={styles.logoContainer}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className={`${styles.burgerButton}`}
            />
            <Logo />
            <div />
          </div>
          <Flex gap="middle" vertical className={styles.contacts}>
            <Link to="tel:+77072008360" aria-label="tel:+77072008360">
              <Flex gap="small" align="center">
                <PhoneOutlined style={{ fontSize: '1.5em' }} />
                +7 707 200 83 60
              </Flex>
            </Link>
            <Link
              to="mailto:info@raydexkz.com"
              aria-label="mailto:info@raydexkz.com"
            >
              <Flex gap="small" align="center">
                <MailOutlined style={{ fontSize: '1.5em' }} />
                info@raydexkz.com
              </Flex>
            </Link>
          </Flex>
        </div>

        <Menu
          className={styles.menu}
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['']}
          items={pages.map((page) => {
            const key = page.key;
            return {
              key,
              label: <Link to={`/${page.key}`}>{page.name}</Link>,
            };
          })}
        />
      </Flex>
      <div
        className={`${styles.burgerMenu} ${
          collapsed ? styles.hidden : styles.visible
        }`}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className={`${styles.burgerMenuContent} ${
            collapsed ? styles.hidden : styles.visible
          }`}
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={pages.map((page) => ({
              key: page.key,
              label: <Link to={`/${page.key}`}>{page.name}</Link>,
              onClick: () => setCollapsed(!collapsed),
            }))}
          />
        </Sider>
      </div>
    </Header>
  );
};

export default HeaderComponent;
