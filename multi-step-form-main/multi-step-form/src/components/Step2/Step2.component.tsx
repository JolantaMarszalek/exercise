import { Link } from "react-router-dom";
import { ButtonDark } from "../Button/ButtonDark.component";

import {
  Step2ButtonContainer,
  Step2Describe,
  Step2SectionStyle,
  Step2Title,
} from "./Step2.styled";
import { ButtonLight } from "../Button/ButtonLight.component";

export const Step2Section = () => {
  return (
    <Step2SectionStyle>
      <Step2Title>Select your plan</Step2Title>
      <Step2Describe>
        You have the option of monthly or yearly billing.
      </Step2Describe>

      <Step2ButtonContainer>
        <Link to="/">
          <ButtonLight>Go Back</ButtonLight>{" "}
        </Link>
        <Link to="/addOns">
          <ButtonDark>Next Step</ButtonDark>
        </Link>
      </Step2ButtonContainer>
    </Step2SectionStyle>
  );
};
