// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from './Slide';

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
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {productsForSlider.length > 0 &&
          productsForSlider.map((p) => (
            <SwiperSlide key={p?.id}>
              <Slide {...p} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
