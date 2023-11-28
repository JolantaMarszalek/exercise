import {
  MiddleSectionLeftSide,
  MiddleSectionStyle,
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
      </MiddleSectionStyle>
    </>
  );
};
