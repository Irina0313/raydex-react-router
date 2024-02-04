import { ProductItemType } from '../../lib/catalog/products/01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';
import { LinkButton } from '../LinkButton';

import { Flex } from 'antd';
import styles from './styles.module.scss';
import './styles.scss';

import { findPathByName } from '../../utils/getFullPath';

export const Slide = (product: ProductItemType) => {
  const { name, code, sliderDescription, images } = product;
  const url = findPathByName(name) || '#';
  return (
    <>
      <Flex justify='center' className={styles.slideWrapper}>
        <Flex vertical justify='center' className={styles.leftSide}>
          <Flex vertical justify='center' className={styles.leftSideContent}>
            <p className={styles.title}>{name}</p>
            <h2 className={styles.code}>{code}</h2>
            <p className={styles.description}>{sliderDescription}</p>
          </Flex>
          <Flex className={styles.buttonContainer}>
            <LinkButton url={url} text='Узнать подробнее' />
          </Flex>
        </Flex>

        <Flex className={styles.rightSide}>
          <img alt='Фото прибора' src={images[0]} />
        </Flex>
      </Flex>
    </>
  );
};
