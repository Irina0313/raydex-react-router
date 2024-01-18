import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
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
      title: (
        <Link to="/">
          <HomeOutlined />
        </Link>
      ),
    },
    ...results
      .filter((result) => result)
      .map((result) => ({
        title: (
          <Link to={result?.path ? String(result?.path) : ""}>
            {result?.title ?? ""}
          </Link>
        ),
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
