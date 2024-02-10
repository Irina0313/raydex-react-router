import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import './productSlider.scss';

interface MyGalleryProps {
  imagesArr: string[];
  pref?: string;
}

const getImages = (imagesArr: string[], pref = ''): ReactImageGalleryItem[] => {
  return imagesArr.map((image) => ({
    original: `${pref}${image}`,
    originalAlt: 'Фото продукта',
    thumbnailAlt: 'Фото продукта',
    thumbnail: `${pref}${image}`,

    thumbnailClass: `sliderImage`,
    originalClass: `sliderOriginalImage`,
  }));
};

const MyGallery = ({ imagesArr, pref }: MyGalleryProps) => {
  const images = getImages(imagesArr, pref);

  return (
    <div className="product-page-slider">
      <ImageGallery items={images} />
    </div>
  );
};

export default MyGallery;
