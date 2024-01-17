import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { getPage } from "../../utils/getPage";

const BreadcrumbComponent = () => {
  const fullPath = useLocation()
    .pathname.split("/")
    .filter((item) => !!item);

  const results = Object.values(fullPath).map((param, index) => {
    const path = fullPath.slice(0, index + 1).join("/");
    const pageName = getPage(param.toString())?.name;

    return { title: pageName, path: `/${path}` };
  });

  const breadcrumbItems: ItemType[] = [
    {
      href: "/",
      title: <HomeOutlined />,
    },
    ...results
      .filter((result) => result)
      .map((result) => ({
        title: result?.title || "",
        href: result?.path ? String(result?.path) : "",
      })),
  ];
  return (
    <div className="wrapper">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

export default BreadcrumbComponent;
