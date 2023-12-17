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
} from "./Step4.styled";
import { ButtonLight } from "../Button/ButtonLight.component";

export const Step4Section = () => {
  return (
    <Step4SectionStyle>
      <Step4Title> Pick add-ons</Step4Title>
      <Step4Describe>
        Add-ons help enhance your gaming experience.
      </Step4Describe>
      <Step4CardSection>
        <Step4SingleCardSection>
          <Step4SingleCardTextSection>
            <Step4SingleCardTitle> Online service</Step4SingleCardTitle>
            <Step4SingleCardDescribe>
              {" "}
              Access to multiplayer games
            </Step4SingleCardDescribe>
            <Step4SingleCardDescribe>
              {" "}
              Access to multiplayer games
            </Step4SingleCardDescribe>{" "}
            <Step4SingleCardDescribe>
              {" "}
              Access to multiplayer games
            </Step4SingleCardDescribe>
          </Step4SingleCardTextSection>
          <Step4SingleCardPriceSection>
            <Step4SingleCardPrice>+$1/mo</Step4SingleCardPrice>
            <Step4SingleCardPrice>+$1/mo</Step4SingleCardPrice>{" "}
            <Step4SingleCardPrice>+$1/mo</Step4SingleCardPrice>
          </Step4SingleCardPriceSection>
        </Step4SingleCardSection>
      </Step4CardSection>

      <Step4ButtonContainer>
        <Link to="/addOns">
          <ButtonLight>Go Back</ButtonLight>{" "}
        </Link>
        <Link to="/summary">
          <ButtonDark>Next Step</ButtonDark>
        </Link>
      </Step4ButtonContainer>
    </Step4SectionStyle>
  );
};
