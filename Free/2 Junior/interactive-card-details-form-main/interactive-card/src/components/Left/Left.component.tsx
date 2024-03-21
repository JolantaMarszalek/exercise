import {
  LeftSection,
  LeftSectionCard,
  LeftSectionCardBottom,
  LeftSectionCardTop,
} from "./Left.styled";

import imageCardFront from "./../../../../images/bg-card-front.png";
import imageCardBack from "./../../../../images/bg-card-back.png";

export const Left = () => {
  return (
    <LeftSection>
      <LeftSectionCard>
        <LeftSectionCardTop>
          <img src={imageCardFront} alt="Card front" />
        </LeftSectionCardTop>
        <LeftSectionCardBottom>
          <LeftSectionCardTop>
            <img src={imageCardBack} alt="Card back" />
          </LeftSectionCardTop>
        </LeftSectionCardBottom>
      </LeftSectionCard>
    </LeftSection>
  );
};
