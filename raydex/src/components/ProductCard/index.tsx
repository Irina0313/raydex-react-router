import { Link } from 'react-router-dom';
import { Card } from 'antd';
import ImagesCarousel from '../ImagesCarousel';

import CustomButton from '../button';
import { ProductItemType } from '../../lib/catalog/products/01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';

import { findPathByName } from '../../utils/getFullPath';

const { Meta } = Card;

interface ProductCardProps {
  category?: (ProductItemType | undefined)[] | undefined;
  imagePathPrefix?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  category = [],
  imagePathPrefix = '',
}) => {
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
                  <ImagesCarousel
                    images={p.images}
                    imagePathPrefix={imagePathPrefix}
                  />
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
                  description={`${p.status}`}
                />
                <CustomButton text='Заказать' />
              </Card>
            )
        )}
    </>
  );
};

export default ProductCard;
