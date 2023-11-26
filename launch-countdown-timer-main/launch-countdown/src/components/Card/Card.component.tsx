import {
  CardSection,
  CardStyled,
  NumbersCard,
  SingleCardStyled,
  // CardStyledBottom,
  // CardStyledTop,
  // NumbersCard,
  TextUnderCard,
} from "./Card.styled";

export const Card = () => {
  return (
    <>
      <CardSection>
        <SingleCardStyled>
          <CardStyled>
            <NumbersCard>08</NumbersCard>
          </CardStyled>
          <TextUnderCard>DAYS</TextUnderCard>
        </SingleCardStyled>
        <SingleCardStyled>
          <CardStyled>
            <NumbersCard>08</NumbersCard>
          </CardStyled>
          <TextUnderCard>DAYS</TextUnderCard>
        </SingleCardStyled>
        <SingleCardStyled>
          <CardStyled>
            <NumbersCard>08</NumbersCard>
          </CardStyled>
          <TextUnderCard>DAYS</TextUnderCard>
        </SingleCardStyled>
        <SingleCardStyled>
          <CardStyled>
            <NumbersCard>08</NumbersCard>
          </CardStyled>
          <TextUnderCard>DAYS</TextUnderCard>
        </SingleCardStyled>
      </CardSection>
    </>
  );
};
