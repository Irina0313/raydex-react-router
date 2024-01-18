import { useState } from 'react';
import { Tabs } from 'antd';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { getPage } from '../../utils/getPage';
import ImagesSlider from '../../components/ImagesSlider';

export const Product = () => {
  const params = useParams();
  const { product } = params;

  const path = useLocation().pathname;

  const productItem = product && getPage(product.toString());

  const images = productItem && 'images' in productItem && productItem?.images;
  const tabs = productItem && 'tabs' in productItem && productItem?.tabs;

  const [activeTab, setActiveTab] = useState('Описание');

  const getTabContent = (key: string) => {
    return (
      productItem &&
      (key === 'Описание' && 'fullDescription' in productItem
        ? productItem.fullDescription
        : key === 'Характеристики' && 'fullCharacteristics' in productItem
          ? productItem.fullCharacteristics
          : key === 'Документы' && 'docs' in productItem
            ? productItem.docs
            : null)
    );
  };

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  const handleDetailsLinkClick = (tab: string) => {
    setActiveTab(tab);
  };

  const prevPagePath = (): string => {
    return path.split('/').slice(0, -1).join('/');
  };

  return (
    <>
      <div className={styles.topSection}>
        <div className={styles.sliderContainer}>
          {images && (
            <ImagesSlider images={images} imagePathPrefix="../../../" />
          )}
        </div>
        <div className={styles.shortDescription}>
          {productItem &&
            'shortDescription' in productItem &&
            productItem.shortDescription}
          <Link
            className={styles.detailsLink}
            to="#description"
            onClick={() => handleDetailsLinkClick('Описание')}
          >
            Подробности
          </Link>
          <h3>Характеристики</h3>
          {productItem &&
            'characteristics' in productItem &&
            productItem.characteristics}
          <Link
            className={styles.detailsLink}
            to="#characteristics"
            onClick={() => handleDetailsLinkClick('Характеристики')}
          >
            Все характеристики
          </Link>
        </div>
      </div>
      <div className={styles.bottomSection}>
        {tabs && (
          <Tabs
            onChange={onChange}
            type="card"
            items={Object.values(tabs).map((key, index) => {
              return {
                id: `${Object.keys(tabs)[index]}`,
                label: `${key}`,
                key: key,
                children: getTabContent(key),
              };
            })}
            activeKey={activeTab}
          />
        )}
      </div>

      <Link className={styles.detailsLink} to={prevPagePath()}>
        Назад к списку
      </Link>
    </>
  );
};
