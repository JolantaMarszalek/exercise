import { Link, useLocation } from "react-router-dom";
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
  Step4UnderSingleCard,
  Step4SingleCardTextSingleLine,
  Step4SingleCardTextFromStep2,
  Step4SingleCardTextSingleLineFromStep2,
  Step4SingleCardPriceFromStep2,
  Step4SingleCardTextSingleLineSection,
  // Step4SingleCardTextSingleLineText,
} from "./Step4.styled";
import { ButtonLight } from "../Button/ButtonLight.component";
import { ButtonDarkSecond } from "../Button/ButtonDarkSecond.component";
import { useEffect, useState } from "react";

export const Step4Section = () => {
  const location = useLocation();
  const { state } = location;
  const { selectedAddons: initialSelectedAddons, isMonthly: initialIsMonthly } =
    state || { selectedAddons: [], isMonthly: true };
  const [selectedAddons, setSelectedAddons] = useState<string[]>(
    initialSelectedAddons
  );
  const [isMonthly, setIsMonthly] = useState<boolean>(initialIsMonthly);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const addons = JSON.parse(decodeURIComponent(params.get("addons") || "[]"));
    setSelectedAddons(addons);
    setIsMonthly(params.get("monthly") === "true");
  }, [location.search]);

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

  const selectedAddonsInStep4 = selectedAddons.map((addonName) => {
    return (
      <Step4SingleCardTextSingleLine key={addonName}>
        <Step4SingleCardDescribe>{addonName}</Step4SingleCardDescribe>

        <Step4SingleCardPrice>{getAddonPrice(addonName)}</Step4SingleCardPrice>
      </Step4SingleCardTextSingleLine>
    );
  });

  return (
    <Step4SectionStyle>
      <Step4Title>Finishing up</Step4Title>
      <Step4Describe>
        Double-check everything looks OK before confirming.
      </Step4Describe>
      <Step4CardSection>
        <Step4SingleCardSection>
          <Step4SingleCardTextSection>
            <Step4SingleCardTextFromStep2>
              <Step4SingleCardTextSingleLineFromStep2>
                <Step4SingleCardTitle>Arcade (Monthly)</Step4SingleCardTitle>
                <Step4SingleCardDescribe>Change</Step4SingleCardDescribe>
              </Step4SingleCardTextSingleLineFromStep2>
              <Step4SingleCardPriceFromStep2>
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                  }}>
                  +$9/mo
                </span>
              </Step4SingleCardPriceFromStep2>
            </Step4SingleCardTextFromStep2>

            <Step4SingleCardTextSingleLineSection>
              {" "}
              {selectedAddonsInStep4}
            </Step4SingleCardTextSingleLineSection>
          </Step4SingleCardTextSection>
        </Step4SingleCardSection>
        <Step4UnderSingleCard>
          <Step4SingleCardDescribe>Total (per month)</Step4SingleCardDescribe>
          <Step4SingleCardPrice>
            <span
              style={{
                color: "var(--primary-purplish-blue)",
                fontWeight: "bold",
                fontSize: "20px",
              }}>
              +$12/mo
            </span>
          </Step4SingleCardPrice>
        </Step4UnderSingleCard>
      </Step4CardSection>
      <Step4ButtonContainer>
        <Link to="/addOns">
          <ButtonLight>Go Back</ButtonLight>
        </Link>
        <Link to="/thankYou">
          <ButtonDarkSecond>Confirm</ButtonDarkSecond>
        </Link>
      </Step4ButtonContainer>
    </Step4SectionStyle>
  );
};
