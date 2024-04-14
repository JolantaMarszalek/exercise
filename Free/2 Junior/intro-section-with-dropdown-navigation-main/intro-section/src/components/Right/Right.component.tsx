import {
  RightSection,
  RightSectionCard,
  RightSectionCardImage,
} from "./Right.styled";

import imageHeroDesktop from "./../../../../images/image-hero-desktop.png";
import imageHeroMobile from "./../../../../images/image-hero-mobile.png";

export const Right = () => {
  return (
    <>
      <RightSection>
        <RightSectionCard>
          <RightSectionCardImage
            src={imageHeroDesktop}
            alt="Image hero desktop"
            className="image-hero-desktop"></RightSectionCardImage>
          <RightSectionCardImage
            src={imageHeroMobile}
            alt="Image hero mobile"
            className="image-hero-mobile"></RightSectionCardImage>
        </RightSectionCard>
      </RightSection>
    </>
  );
};
