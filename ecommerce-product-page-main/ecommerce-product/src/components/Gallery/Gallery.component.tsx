import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import imageProduct1 from "../../../../images/image-product-1.jpg";
import imageProduct2 from "../../../../images/image-product-2.jpg";
import imageProduct3 from "../../../../images/image-product-3.jpg";
import imageProduct4 from "../../../../images/image-product-4.jpg";
// import imageProduct1Small from "../../../../images/image-product-1-thumbnail.jpg";
// import imageProduct2Small from "../../../../images/image-product-2-thumbnail.jpg";
// import imageProduct3Small from "../../../../images/image-product-3-thumbnail.jpg";
// import imageProduct4Small from "../../../../images/image-product-4-thumbnail.jpg";
import {
  CloseButton,
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

const GalleryComponent: React.FC<GalleryProps> = ({
  images,
  //   selectedIndex,
  //   onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  //   const pictures: string[] = [
  //     imageProduct1Small,
  //     imageProduct2Small,
  //     imageProduct3Small,
  //     imageProduct4Small,
  //   ];

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
        <LeftArrow onClick={goToPrevious}>{"<"}</LeftArrow>
        <RightArrow onClick={goToNext}>{">"}</RightArrow>
        <CloseButton onClick={closeLightbox}>X</CloseButton>
      </GalleryContainer>
    </>
  );
};

export default GalleryComponent;
