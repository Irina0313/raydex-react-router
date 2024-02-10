import { register } from 'swiper/element/bundle';

register();
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import 'swiper/element/css/zoom';

import './styles.scss';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

interface SwiperProps {
  images: string[];
  imagePathPrefix: string;
}
export default function ProductCardSwiper({
  images,
  imagePathPrefix = '',
}: SwiperProps) {
  //const swiperElRef = useRef(null);

  return (
    <div className="productCardSwiper">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={false}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        zoom={true}
        loop={true}
        style={{
          height: '70%',
          padding: '10px 0 30px 0',
          borderRadius: '10px',
        }}
      >
        {images.map((p) => (
          <SwiperSlide>
            <img
              src={`${imagePathPrefix}${p}`}
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '280px',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
