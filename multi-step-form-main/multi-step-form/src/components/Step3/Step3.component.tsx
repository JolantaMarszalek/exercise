import { Link } from "react-router-dom";
import { ButtonDark } from "../Button/ButtonDark.component";

import {
  Step3ButtonContainer,
  Step3Describe,
  Step3SectionStyle,
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
