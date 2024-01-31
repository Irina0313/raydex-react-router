// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from './Slide';
import styles from './styles.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.scss';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { ProductItemType } from '../../lib/catalog/products/01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters';
import { sliderItemsCodes } from '../../lib/catalog/productsForMainSlider';
import { getProductByCode } from '../../utils/getProductByCode';

const productsForSlider = sliderItemsCodes
  .map((p) => getProductByCode(p))
  .filter((p) => !!p) as ProductItemType[];

export const Slider = () => {
  return (
    <>
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        /*  effect={'fade'} */
        pagination={{
          clickable: true,
        }}
        mousewheel={false}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper6'
      >
        {productsForSlider.length > 0 &&
          productsForSlider.map((p) => (
            <SwiperSlide key={p?.id} className={styles.mySlide}>
              <Slide {...p} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
