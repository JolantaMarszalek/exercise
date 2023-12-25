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
import { useState } from "react";

export const Step3Section = () => {
  const location = useLocation();
  const { isMonthly, selectedCard } = location.state || {
    isMonthly: false,
    selectedCard: "",
  };

  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

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

  const handleAddonSelection = (addonType: string) => {
    const index = selectedAddons.indexOf(addonType);
    if (index === -1) {
      setSelectedAddons([...selectedAddons, addonType]);
    } else {
      const updatedAddons = [...selectedAddons];
      updatedAddons.splice(index, 1);
      setSelectedAddons(updatedAddons);
    }
  };

  return (
    <Step3SectionStyle>
      <Step3Title>Pick add-ons</Step3Title>
      <Step3Describe>
        Add-ons help enhance your gaming experience.
      </Step3Describe>
      <Step3CardSection>
        <Step3SingleCardSection
          isSelected={selectedAddons.includes("Online service")}>
          <Step3SingleCardCheckboxSection>
            {" "}
            <input
              type="checkbox"
              onChange={() => handleAddonSelection("Online service")}
              checked={selectedAddons.includes("Online service")}
            />
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
        <Step3SingleCardSection
          isSelected={selectedAddons.includes("Larger storage")}>
          {" "}
          <Step3SingleCardCheckboxSection>
            {" "}
            <input
              type="checkbox"
              onChange={() => handleAddonSelection("Larger storage")}
              checked={selectedAddons.includes("Larger storage")}
            />
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
        <Step3SingleCardSection
          isSelected={selectedAddons.includes("Customizable Profile")}>
          {" "}
          <Step3SingleCardCheckboxSection>
            {" "}
            <input
              type="checkbox"
              onChange={() => handleAddonSelection("Customizable Profile")}
              checked={selectedAddons.includes("Customizable Profile")}
            />
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
        <Link
          to={{
            pathname: "/summary",
            search: `?selectedCard=${selectedCard}&addons=${encodeURIComponent(
              JSON.stringify(selectedAddons)
            )}&monthly=${isMonthly}`,
          }}>
          <ButtonDark>Next Step</ButtonDark>
        </Link>
      </Step3ButtonContainer>
    </Step3SectionStyle>
  );
};
