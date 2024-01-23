import {
  CardSectionBottom,
  CardSectionMiddle,
  CardSectionStyled,
  CardSectionToggle,
  CardSectionTop,
} from "./Card.styled";

export const Card = () => {
  return (
    <>
      <CardSectionStyled>
        <CardSectionTop></CardSectionTop>
        <CardSectionToggle></CardSectionToggle>
        <CardSectionMiddle></CardSectionMiddle>
        <CardSectionBottom></CardSectionBottom>
      </CardSectionStyled>
    </>
  );
};
