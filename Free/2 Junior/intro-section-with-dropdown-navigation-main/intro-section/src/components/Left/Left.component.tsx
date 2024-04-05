import {
  LeftSection,
  LeftSectionCard,
  LeftSectionCardButton,
  LeftSectionCardDescribe,
  LeftSectionCardImages,
  LeftSectionCardSingleImage,
  LeftSectionCardTitle,
} from "./Left.styled";

export const Left = () => {
  return (
    <>
      <LeftSection>
        <LeftSectionCard>
          <LeftSectionCardTitle>Make remote work</LeftSectionCardTitle>
          <LeftSectionCardDescribe>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </LeftSectionCardDescribe>
          <LeftSectionCardButton>Learn more</LeftSectionCardButton>
          <LeftSectionCardImages>
            <LeftSectionCardSingleImage></LeftSectionCardSingleImage>
            <LeftSectionCardSingleImage></LeftSectionCardSingleImage>
            <LeftSectionCardSingleImage></LeftSectionCardSingleImage>
            <LeftSectionCardSingleImage></LeftSectionCardSingleImage>
          </LeftSectionCardImages>
        </LeftSectionCard>
      </LeftSection>
    </>
  );
};
