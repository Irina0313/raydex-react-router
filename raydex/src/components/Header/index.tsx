import { Layout, Menu, Flex } from "antd";
import styles from "./header.module.scss";
import { pages } from "../../utils/getPage";
const { Header } = Layout;

import Logo from "../Logo";

const HeaderComponent = () => {
  return (
    <Header className={styles.header}>
      <Flex vertical justify="center" align="center" className="wrapper">
        <Logo />
        <Menu
          className={styles.menu}
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[""]}
          items={pages.map((page) => {
            const key = page.key;
            return {
              key,
              label:
                page.key === "catalog" ? (
                  <a href={`/${page.key}/x-ray-and-gamma-radiation-dosimeters`}>
                    {page.name}
                  </a>
                ) : (
                  <a href={`/${page.key}`}>{page.name}</a>
                ),
            };
          })}
        />
      </Flex>
    </Header>
  );
};

export default HeaderComponent;
