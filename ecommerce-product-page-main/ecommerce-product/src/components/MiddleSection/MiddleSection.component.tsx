import {
  Describe,
  MiddleSectionLeftSide,
  MiddleSectionRightSide,
  MiddleSectionStyle,
  Title,
  TitleCompany,
} from "./MiddleSection.styled";

import imageProduct1 from "../../../../images/image-product-1-thumbnail.jpg";

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
        </MiddleSectionRightSide>
      </MiddleSectionStyle>
    </>
  );
};
