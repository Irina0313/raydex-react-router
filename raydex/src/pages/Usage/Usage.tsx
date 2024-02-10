import { usageAreas } from '../../lib/constants';
import { Collapse, Tabs } from 'antd';

import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import styles from './usage.module.scss';

const { tabs, collapse } = styles;

export const Usage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { area } = params;
  const [activeTab, setActiveTab] = useState(area || usageAreas[0].key);

  useEffect(() => {
    navigate(`/usage/${activeTab}`);
  }, [activeTab, navigate]);

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div>
      {usageAreas && (
        <>
          <Tabs
            className={tabs}
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
          <Collapse
            className={collapse}
            items={usageAreas.map((i) => {
              return {
                id: `${i.key}`,
                label: `${i.name}`,
                key: i.key,
                children: <Outlet />,
              };
            })}
            defaultActiveKey={['nuclearIndustry']}
          />
        </>
      )}
    </div>
  );
};
