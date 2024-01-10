import {
  CardSection,
  CardSectionDescribe,
  CardSectionText,
  CardSectionTitle,
  CardSectionPrice,
  CardSectionTop,
  CardSectionMiddle,
  CardSectionBottom,
  CardSectionPercent,
} from "./Card.styled";

export const Card = () => {
  return (
    <CardSection>
      <CardSectionTop>
        <CardSectionText>
          <CardSectionTitle>Spending - Last 7 days</CardSectionTitle>
        </CardSectionText>
      </CardSectionTop>
      <CardSectionMiddle></CardSectionMiddle>
      <CardSectionBottom>
        <CardSectionText>
          <CardSectionDescribe>Total this month</CardSectionDescribe>
          <CardSectionPrice>$478.33</CardSectionPrice>
        </CardSectionText>
        <CardSectionText>
          <CardSectionPercent>+2.4%</CardSectionPercent>
          <CardSectionDescribe>from last month</CardSectionDescribe>
        </CardSectionText>
      </CardSectionBottom>
    </CardSection>
  );
};
