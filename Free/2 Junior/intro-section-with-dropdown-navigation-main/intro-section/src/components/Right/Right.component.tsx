import {
  RightSection,
  RightSectionCard,
  RightSectionCardImage,
} from "./Right.styled";

import imageHeroDesktop from "./../../../../images/image-hero-desktop.png";

export const Right = () => {
  return (
    <>
      <RightSection>
        <RightSectionCard>
          <RightSectionCardImage
            src={imageHeroDesktop}
            alt="Image hero desktop"></RightSectionCardImage>
        </RightSectionCard>
      </RightSection>
    </>
  );
};
