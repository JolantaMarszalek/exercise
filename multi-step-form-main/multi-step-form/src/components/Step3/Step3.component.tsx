import { Link } from "react-router-dom";
import { ButtonDark } from "../Button/ButtonDark.component";

import {
  Step3ButtonContainer,
  Step3CardSection,
  Step3Describe,
  Step3SectionStyle,
  Step3SingleCardDescribe,
  Step3SingleCardPrice,
  Step3SingleCardSection,
  Step3SingleCardTextSection,
  Step3SingleCardTitle,
  Step3Title,
} from "./Step3.styled";
import { ButtonLight } from "../Button/ButtonLight.component";

export const Step3Section = () => {
  return (
    <Step3SectionStyle>
      <Step3Title> Pick add-ons</Step3Title>
      <Step3Describe>
        Add-ons help enhance your gaming experience.
      </Step3Describe>
      <Step3CardSection>
        <Step3SingleCardSection>
          <Step3SingleCardTextSection>
            <Step3SingleCardTitle> Online service</Step3SingleCardTitle>
            <Step3SingleCardDescribe>
              {" "}
              Access to multiplayer games
            </Step3SingleCardDescribe>
          </Step3SingleCardTextSection>
          <Step3SingleCardPrice>+$1/mo</Step3SingleCardPrice>
        </Step3SingleCardSection>
        <Step3SingleCardSection>
          <Step3SingleCardTextSection>
            <Step3SingleCardTitle> Larger storage</Step3SingleCardTitle>
            <Step3SingleCardDescribe>
              {" "}
              Extra 1TB of cloud save
            </Step3SingleCardDescribe>{" "}
          </Step3SingleCardTextSection>{" "}
          <Step3SingleCardPrice> +$2/mo</Step3SingleCardPrice>
        </Step3SingleCardSection>
        <Step3SingleCardSection>
          <Step3SingleCardTextSection>
            <Step3SingleCardTitle> Customizable Profile</Step3SingleCardTitle>
            <Step3SingleCardDescribe>
              {" "}
              Custom theme on your profile
            </Step3SingleCardDescribe>{" "}
          </Step3SingleCardTextSection>{" "}
          <Step3SingleCardPrice> +$2/mo</Step3SingleCardPrice>
        </Step3SingleCardSection>
      </Step3CardSection>

      <Step3ButtonContainer>
        <Link to="/">
          <ButtonLight>Go Back</ButtonLight>{" "}
        </Link>
        <Link to="/summary">
          <ButtonDark>Next Step</ButtonDark>
        </Link>
      </Step3ButtonContainer>
    </Step3SectionStyle>
  );
};
