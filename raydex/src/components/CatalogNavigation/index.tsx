import { Menu } from "antd";
import type { MenuProps } from "antd/es/menu";
import { CatalogItemType, catalog } from "../../lib/catalog/catalog";
import { Link, redirect } from "react-router-dom";
import { findPathByName } from "../../utils/getFullPath";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export default function CatalogNavigation() {
  const handleMenuClick = (key: string) => {
    const path = findPathByName(key);
    redirect(`/${path}`);
  };

  const createMenuItems = (
    items: CatalogItemType[],
    parentPath: string = "/catalog",
  ): MenuItem[] => {
    return items.map((item) => {
      const { id, path, name, subcategory } = item;

      const subcategoryItems: MenuItem[] | undefined =
        subcategory && subcategory.length > 0
          ? createMenuItems(subcategory, `${parentPath}/${path}`)
          : undefined;

      return getItem(
        <Link
          to={`${findPathByName(name)}`}
          style={{ display: "inline-block", width: "100%", height: "100%" }}
        >
          {name}
        </Link>,
        id.toString(),
        null,
        subcategoryItems && [...subcategoryItems],
      );
    });
  };

  const items: MenuItem[] = createMenuItems(catalog);

  return (
    <Menu
      onClick={(e) => handleMenuClick(e.key)}
      mode="inline"
      style={{ width: 350 }}
      items={items}
    />
  );
}
