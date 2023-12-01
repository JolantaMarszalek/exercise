import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface GalleryProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
}

const GalleryComponent: React.FC<GalleryProps> = ({
  images,
  selectedIndex,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const pictures = [
    "../../../../images/image-product-1.jpg",
    "../../../../images/image-product-2.jpg",
    "../../../../images/image-product-3.jpg",
    "../../../../images/image-product-4.jpg",
  ];

  const thumbnails = [
    "../../../../images/image-product-1-thumbnail.jpg",
    "../../../../images/image-product-2-thumbnail.jpg",
    "../../../../images/image-product-3-thumbnail.jpg",
    "../../../../images/image-product-4-thumbnail.jpg",
  ];

  const openLightbox = (index: number) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      {thumbnails.map((thumbnail, index) => (
        <img
          key={index}
          src={thumbnail}
          alt={`Thumbnail ${index}`}
          onClick={() => openLightbox(index)}
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={pictures[photoIndex]}
          nextSrc={pictures[(photoIndex + 1) % pictures.length]}
          prevSrc={
            pictures[(photoIndex + pictures.length - 1) % pictures.length]
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + pictures.length - 1) % pictures.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % pictures.length)
          }
        />
      )}
    </>
  );
};

export default GalleryComponent;
