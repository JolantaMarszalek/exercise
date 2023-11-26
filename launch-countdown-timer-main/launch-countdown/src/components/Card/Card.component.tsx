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
            <NumbersCard>23</NumbersCard>
          </CardStyled>
          <TextUnderCard>HOURS</TextUnderCard>
        </SingleCardStyled>
        <SingleCardStyled>
          <CardStyled>
            <NumbersCard>55</NumbersCard>
          </CardStyled>
          <TextUnderCard>MINUTES</TextUnderCard>
        </SingleCardStyled>
        <SingleCardStyled>
          <CardStyled>
            <NumbersCard>41</NumbersCard>
          </CardStyled>
          <TextUnderCard>SECONDS</TextUnderCard>
        </SingleCardStyled>
      </CardSection>
    </>
  );
};
