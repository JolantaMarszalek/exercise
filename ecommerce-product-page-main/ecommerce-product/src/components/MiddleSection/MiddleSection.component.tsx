import {
  Button,
  ButtonSection,
  Describe,
  MiddleSectionLeftSide,
  MiddleSectionRightSide,
  MiddleSectionStyle,
  OldPrice,
  Percent,
  Price,
  PricePercentSection,
  Title,
  TitleCompany,
} from "./MiddleSection.styled";

import imageProduct1 from "../../../../images/image-product-1-thumbnail.jpg";
import Quantity from "../Quantity/Quantity.component";

export const MiddleSection = () => {
  return (
    <>
      <MiddleSectionStyle>
        <MiddleSectionLeftSide>
          {" "}
          <img src={imageProduct1} />
          {/* <img src="../../../../images/image-product-1-thumbnail.jpg" /> */}
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
            <Quantity />
            <Button>Add to cart</Button>
          </ButtonSection>
        </MiddleSectionRightSide>
      </MiddleSectionStyle>
    </>
  );
};
