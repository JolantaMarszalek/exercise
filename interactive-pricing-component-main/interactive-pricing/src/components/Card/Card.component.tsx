import {
  CardSectionBottom,
  CardSectionBottomLeft,
  CardSectionBottomRight,
  CardSectionMiddle,
  CardSectionStyled,
  CardSectionToggle,
  CardSectionTop,
  CardSectionTopLeft,
} from "./Card.styled";

export const Card = () => {
  return (
    <>
      <CardSectionStyled>
        <CardSectionTop>
          <CardSectionTopLeft>Pageviews</CardSectionTopLeft>
          <CardSectionBottomRight>$ /month</CardSectionBottomRight>
        </CardSectionTop>
        <CardSectionToggle></CardSectionToggle>
        <CardSectionMiddle></CardSectionMiddle>
        <CardSectionBottom>
          <CardSectionBottomLeft></CardSectionBottomLeft>
          <CardSectionBottomRight></CardSectionBottomRight>
        </CardSectionBottom>
      </CardSectionStyled>
    </>
  );
};
