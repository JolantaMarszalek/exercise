import {
  BottomSection,
  BottomSectionCard,
  BottomSectionCardLeft,
  BottomSectionCardLeftTitle,
  BottomSectionCardRight,
  BottomSectionCardRightButton,
} from "./Bottom.styled";

export const Bottom = () => {
  return (
    <BottomSection>
      <BottomSectionCard>
        <BottomSectionCardLeft>
          <BottomSectionCardLeftTitle>
            Find out more about how we work
          </BottomSectionCardLeftTitle>
        </BottomSectionCardLeft>
        <BottomSectionCardRight>
          <BottomSectionCardRightButton>
            How we work
          </BottomSectionCardRightButton>
        </BottomSectionCardRight>
      </BottomSectionCard>
    </BottomSection>
  );
};
