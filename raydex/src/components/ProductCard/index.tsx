import { Link } from 'react-router-dom';
import { Card, Modal } from 'antd';
import ContactForm from '../forms/contactForm';

//import CustomButton from '../button';
import { ProductItemType } from '../../lib/catalog/products/01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';

import { findPathByName } from '../../utils/getFullPath';
import ProductCardSwiper from '../ProductCardSlider';
import { useState } from 'react';

import styles from './productCard.module.scss';
const { Meta } = Card;

interface ProductCardProps {
  category?: (ProductItemType | undefined)[] | undefined;
  imagePathPrefix?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  category = [],
  imagePathPrefix = '',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  /* const showModal = () => {
    setIsModalOpen(true);
  }; */

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const modalStyles = {
    footer: {
      display: 'none',
    },
  };
  return (
    <>
      {category &&
        category.map(
          (p) =>
            p && (
              <Card
                key={p?.id}
                hoverable
                style={{
                  width: 400,

                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                cover={
                  <div className={styles.cardContainer}>
                    <ProductCardSwiper
                      images={p.images}
                      imagePathPrefix={imagePathPrefix}
                    />
                  </div>
                }
              >
                <Meta
                  title={
                    <Link
                      style={{ overflow: 'visible' }}
                      to={`${findPathByName(p.name)}`}
                      /* onClick={() => handleClick(p.name)} */
                    >
                      {p.name}
                    </Link>
                  }
                  /*  description={`${p.status}`} */
                />
                {/* <div style={{ margin: '10px 0 0 0' }}>
                  <CustomButton text="Заказать" handleClick={showModal} />
                </div> */}
              </Card>
            )
        )}
      <Modal open={isModalOpen} styles={modalStyles} onCancel={handleCancel}>
        <ContactForm />
      </Modal>
    </>
  );
};

export default ProductCard;
