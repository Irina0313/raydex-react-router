import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.scss';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface ProductSliderProps {
  images: string[];
  pref: string;
}

export default function ProductSlider({ images, pref }: ProductSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
        loop={true}
      >
        {images.map((p) => (
          <SwiperSlide key={p}>
            <img src={`${pref}${p}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper3'
        loop={true}
      >
        {images.map((p) => (
          <SwiperSlide key={p}>
            <img src={`${pref}${p}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
