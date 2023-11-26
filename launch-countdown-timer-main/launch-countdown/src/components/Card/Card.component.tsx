import {
  CardSection,
  CardStyled,
  NumbersCard,
  // CardStyledBottom,
  // CardStyledTop,
  // NumbersCard,
  TextUnderCard,
} from "./Card.styled";

export const Card = () => {
  return (
    <>
      <CardSection>
        <CardStyled>
          <NumbersCard>08:00</NumbersCard>
          {/* <CardStyledTop>08:00</CardStyledTop>
          <CardStyledBottom>08:00</CardStyledBottom> */}
        </CardStyled>
        <TextUnderCard>DAYS</TextUnderCard>
      </CardSection>
    </>
  );
};
