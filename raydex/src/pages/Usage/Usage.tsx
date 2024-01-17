import { Tabs } from "antd";
import { usageAreas } from "../../lib/constants";

import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export const Usage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { area } = params;
  const [activeTab, setActiveTab] = useState(area || usageAreas[0].key);
  useEffect(() => {
    navigate(`/usage/${activeTab}`);
  }, [activeTab]);

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div style={{ padding: "0 50px" }}>
      {usageAreas && (
        <Tabs
          onChange={onChange}
          type="card"
          items={usageAreas.map((i) => {
            return {
              id: `${i.key}`,
              label: `${i.name}`,
              key: i.key,
              children: <Outlet />,
            };
          })}
          activeKey={activeTab}
        />
      )}
    </div>
  );
};
