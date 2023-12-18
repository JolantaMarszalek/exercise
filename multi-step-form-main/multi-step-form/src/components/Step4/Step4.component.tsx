import { Link } from "react-router-dom";
import { ButtonDark } from "../Button/ButtonDark.component";

import {
  Step4ButtonContainer,
  Step4CardSection,
  Step4Describe,
  Step4SectionStyle,
  Step4SingleCardDescribe,
  Step4SingleCardPrice,
  Step4SingleCardSection,
  Step4SingleCardTextSection,
  Step4SingleCardTitle,
  Step4Title,
  Step4SingleCardPriceSection,
  Step4UnderSingleCard,
} from "./Step4.styled";
import { ButtonLight } from "../Button/ButtonLight.component";

export const Step4Section = () => {
  return (
    <Step4SectionStyle>
      <Step4Title>Finishing up</Step4Title>
      <Step4Describe>
        Double-check everything looks OK before confirming.
      </Step4Describe>
      <Step4CardSection>
        <Step4SingleCardSection>
          <Step4SingleCardTextSection>
            <Step4SingleCardTitle>Arcade (Monthly)</Step4SingleCardTitle>
            <Step4SingleCardDescribe>Change</Step4SingleCardDescribe>
            <Step4SingleCardDescribe>Online service</Step4SingleCardDescribe>
            <Step4SingleCardDescribe>Larger storage</Step4SingleCardDescribe>
          </Step4SingleCardTextSection>
          <Step4SingleCardPriceSection>
            <Step4SingleCardPrice>+$9/mo</Step4SingleCardPrice>
            <Step4SingleCardPrice>+$1/mo</Step4SingleCardPrice>
            <Step4SingleCardPrice>+$2/mo</Step4SingleCardPrice>
          </Step4SingleCardPriceSection>
        </Step4SingleCardSection>
        <Step4UnderSingleCard>
          <Step4SingleCardDescribe>Total (per month)</Step4SingleCardDescribe>
          <Step4SingleCardPrice>+$12/mo</Step4SingleCardPrice>
        </Step4UnderSingleCard>
      </Step4CardSection>
      <Step4ButtonContainer>
        <Link to="/addOns">
          <ButtonLight>Go Back</ButtonLight>
        </Link>
        <Link to="/summary">
          <ButtonDark>Next Step</ButtonDark>
        </Link>
      </Step4ButtonContainer>
    </Step4SectionStyle>
  );
};
