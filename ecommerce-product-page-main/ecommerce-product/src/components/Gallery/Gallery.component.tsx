import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import imageProduct1 from "../../../../images/image-product-1.jpg";
import imageProduct2 from "../../../../images/image-product-2.jpg";
import imageProduct3 from "../../../../images/image-product-3.jpg";
import imageProduct4 from "../../../../images/image-product-4.jpg";
import {
  GalleryContainer,
  LeftArrow,
  MainImage,
  RightArrow,
  Thumbnail,
} from "./Gallery.styled";
interface GalleryProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
}

const GalleryComponent: React.FC<GalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const thumbnails: string[] = [
    imageProduct1,
    imageProduct2,
    imageProduct3,
    imageProduct4,
  ];

  const openLightbox = (index: number) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const goToNext = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  return (
    <>
      <GalleryContainer>
        <MainImage
          src={thumbnails[photoIndex]}
          alt={`Main Image`}
          onClick={() => openLightbox(photoIndex)}
        />
        <div>
          {thumbnails.map((thumbnail, index) => (
            <Thumbnail
              key={index}
              src={thumbnail}
              alt={`Thumbnail ${index}`}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={goToPrevious}
            onMoveNextRequest={goToNext}
          />
        )}{" "}
        <LeftArrow onClick={goToPrevious}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </LeftArrow>
        <RightArrow onClick={goToNext}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </RightArrow>
      </GalleryContainer>
    </>
  );
};

export default GalleryComponent;
