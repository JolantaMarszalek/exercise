import { Link } from "react-router-dom";
import { ButtonDark } from "../Button/ButtonDark.component";

import {
  Step3ButtonContainer,
  Step3CardSection,
  Step3Describe,
  Step3SectionStyle,
  Step3SingleCardCheckboxSection,
  Step3SingleCardDescribe,
  Step3SingleCardPrice,
  Step3SingleCardSection,
  Step3SingleCardTextSection,
  Step3SingleCardTitle,
  Step3Title,
} from "./Step3.styled";
import { ButtonLight } from "../Button/ButtonLight.component";
import { useLocation } from "react-router-dom";

export const Step3Section = () => {
  const location = useLocation();
  const isMonthly = location.state ? location.state.isMonthly : true;

  const getAddonPrice = (addonType: string) => {
    if (!isMonthly) {
      switch (addonType) {
        case "Online service":
          return "$1/mo";
        case "Larger storage":
          return "$2/mo";
        case "Customizable Profile":
          return "$2/mo";
        default:
          return "";
      }
    } else {
      switch (addonType) {
        case "Online service":
          return "$10/yr";
        case "Larger storage":
          return "$20/yr";
        case "Customizable Profile":
          return "$20/yr";
        default:
          return "";
      }
    }
  };

  return (
    <Step3SectionStyle>
      <Step3Title>Pick add-ons</Step3Title>
      <Step3Describe>
        Add-ons help enhance your gaming experience.
      </Step3Describe>
      <Step3CardSection>
        <Step3SingleCardSection>
          <Step3SingleCardCheckboxSection>
            {" "}
            <input type="checkbox" />
          </Step3SingleCardCheckboxSection>

          <Step3SingleCardTextSection>
            <Step3SingleCardTitle>Online service</Step3SingleCardTitle>
            <Step3SingleCardDescribe>
              Access to multiplayer games
            </Step3SingleCardDescribe>
          </Step3SingleCardTextSection>
          <Step3SingleCardPrice>
            {getAddonPrice("Online service")}
          </Step3SingleCardPrice>
        </Step3SingleCardSection>
        <Step3SingleCardSection>
          {" "}
          <Step3SingleCardCheckboxSection>
            {" "}
            <input type="checkbox" />
          </Step3SingleCardCheckboxSection>
          <Step3SingleCardTextSection>
            <Step3SingleCardTitle>Larger storage</Step3SingleCardTitle>
            <Step3SingleCardDescribe>
              Extra 1TB of cloud save
            </Step3SingleCardDescribe>
          </Step3SingleCardTextSection>
          <Step3SingleCardPrice>
            {" "}
            {getAddonPrice("Larger storage")}
          </Step3SingleCardPrice>
        </Step3SingleCardSection>
        <Step3SingleCardSection>
          {" "}
          <Step3SingleCardCheckboxSection>
            {" "}
            <input type="checkbox" />
          </Step3SingleCardCheckboxSection>
          <Step3SingleCardTextSection>
            <Step3SingleCardTitle>Customizable Profile</Step3SingleCardTitle>
            <Step3SingleCardDescribe>
              Custom theme on your profile
            </Step3SingleCardDescribe>
          </Step3SingleCardTextSection>
          <Step3SingleCardPrice>
            {getAddonPrice("Customizable Profile")}
          </Step3SingleCardPrice>
        </Step3SingleCardSection>
      </Step3CardSection>
      <Step3ButtonContainer>
        <Link to="/selectPlan">
          <ButtonLight>Go Back</ButtonLight>
        </Link>
        <Link to="/summary">
          <ButtonDark>Next Step</ButtonDark>
        </Link>
      </Step3ButtonContainer>
    </Step3SectionStyle>
  );
};
