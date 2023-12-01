import {
  Button,
  ButtonSection,
  CloseButton,
  Describe,
  MiddleSectionLeftSide,
  MiddleSectionRightSide,
  MiddleSectionStyle,
  OldPrice,
  Percent,
  Price,
  PricePercentSection,
  ProductImage,
  SinleSmallImage,
  SmallImages,
  Title,
  TitleCompany,
} from "./MiddleSection.styled";
import Quantity from "../Quantity/Quantity.component";
import imageProduct1 from "../../../../images/image-product-1.jpg";
import imageProduct1Small from "../../../../images/image-product-1-thumbnail.jpg";
import imageProduct2Small from "../../../../images/image-product-2-thumbnail.jpg";
import imageProduct3Small from "../../../../images/image-product-3-thumbnail.jpg";
import imageProduct4Small from "../../../../images/image-product-4-thumbnail.jpg";
import GalleryComponent from "../Gallery/Gallery.component";
import { useState } from "react";

interface CartItem {
  image: string;
  quantity: number;
  price: number;
}

export const MiddleSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [quantity, setQuantity] = useState<number>(1);
  const [
    price,
    // setPrice
  ] = useState<number>(125.0);

  const images: string[] = [
    imageProduct1Small,
    imageProduct2Small,
    imageProduct3Small,
    imageProduct4Small,
  ];

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const addToCart = () => {
    const item = {
      image: images[selectedImageIndex],
      quantity: quantity,
      price: price,
    };

    setCartItems([...cartItems, item]);
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  return (
    <>
      <MiddleSectionStyle>
        <MiddleSectionLeftSide>
          <ProductImage onClick={() => openLightbox(0)}>
            <img src={imageProduct1} alt="Main Product" />
          </ProductImage>
          <SmallImages>
            {images.map((image, index) => (
              <SinleSmallImage key={index} onClick={() => openLightbox(index)}>
                <img src={image} alt={`Product ${index}`} />
              </SinleSmallImage>
            ))}
          </SmallImages>
        </MiddleSectionLeftSide>
        <MiddleSectionRightSide>
          <TitleCompany>SNEAKER COMPANY</TitleCompany>
          <Title>Fall Limited Edition Sneakers</Title>
          <Describe>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </Describe>
          <PricePercentSection>
            <Price>$125.00</Price>
            <Percent>50%</Percent>
          </PricePercentSection>
          <OldPrice>$250.00</OldPrice>
          <ButtonSection>
            <Quantity onChange={handleQuantityChange} />
            <Button onClick={() => addToCart()}>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  // fill="#69707D"
                  fillRule="nonzero"
                />
              </svg>
              Add to cart
            </Button>
          </ButtonSection>
        </MiddleSectionRightSide>
      </MiddleSectionStyle>
      {lightboxOpen && (
        <>
          <GalleryComponent
            images={images}
            selectedIndex={selectedImageIndex}
            onClose={closeLightbox}
          />
          <CloseButton onClick={closeLightbox}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
              />
            </svg>
          </CloseButton>
        </>
      )}
    </>
  );
};
