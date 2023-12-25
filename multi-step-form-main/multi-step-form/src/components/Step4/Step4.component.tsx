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
  Step4SingleCardTextSingleLineFromStep2Line,
} from "./Step4.styled";
import { ButtonLight } from "../Button/ButtonLight.component";
import { ButtonDarkSecond } from "../Button/ButtonDarkSecond.component";
import { useEffect, useMemo, useState } from "react";

export const Step4Section = () => {
  const location = useLocation();
  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const selectedCard = queryParams.get("selectedCard");
  const addonsString = queryParams.get("addons");
  const selectedAddons = addonsString
    ? JSON.parse(decodeURIComponent(addonsString))
    : [];
  // const isMonthly = queryParams.get("monthly") === "true";
  const [displayType, setDisplayType] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const handleDisplayTypeChange = () => {
    setDisplayType((prevDisplayType) => {
      const newDisplayType =
        prevDisplayType === "monthly" ? "yearly" : "monthly";
      console.log("New Display Type:", newDisplayType);
      setInitialIsMonthly(newDisplayType === "monthly");
      return newDisplayType;
    });
  };

  const [
    ,
    // initialSelectedAddons
    setInitialSelectedAddons,
  ] = useState<string[]>([]);
  const [
    ,
    // initialIsMonthly
    setInitialIsMonthly,
  ] = useState<boolean>(true);

  useEffect(() => {
    const addons = JSON.parse(
      decodeURIComponent(queryParams.get("addons") || "[]")
    );
    const isMonthlyValue = queryParams.get("monthly") === "true";

    setInitialSelectedAddons(addons);
    setInitialIsMonthly(isMonthlyValue);
  }, [queryParams]);

  const getAddonPrice = (addonType: string): string => {
    if (displayType === "monthly") {
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

  const getPrice = (cardType: string): string => {
    if (displayType === "monthly") {
      switch (cardType) {
        case "Arcade":
          return "$9/mo";
        case "Advanced":
          return "$12/mo";
        case "Pro":
          return "$15/mo";
        default:
          return "";
      }
    } else {
      switch (cardType) {
        case "Arcade":
          return "$90/yr";
        case "Advanced":
          return "$120/yr";
        case "Pro":
          return "$150/yr";
        default:
          return "";
      }
    }
  };

  const selectedAddonsInStep4 = selectedAddons.map((addonName: string) => {
    return (
      <Step4SingleCardTextSingleLine key={addonName}>
        <Step4SingleCardDescribe>{addonName}</Step4SingleCardDescribe>
        <Step4SingleCardPrice>{getAddonPrice(addonName)}</Step4SingleCardPrice>
      </Step4SingleCardTextSingleLine>
    );
  });

  const getTotalPrice = (): number => {
    let total = 0;

    if (selectedCard) {
      const cardPrice = getPrice(selectedCard);
      total += parseFloat(cardPrice.split("/")[0].replace("$", ""));
    }

    selectedAddons.forEach((addonName: string) => {
      const addonPrice = getAddonPrice(addonName);
      total += parseFloat(addonPrice.split("/")[0].replace("$", ""));
    });

    return total;
  };

  const totalPrice: number = getTotalPrice();

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
                {selectedCard ? (
                  <>
                    <Step4SingleCardTitle>
                      {" "}
                      {/* {selectedCard} ({!isMonthly ? "Monthly" : "Yearly"}) */}
                      {selectedCard} (
                      {displayType === "monthly" ? "Monthly" : "Yearly"})
                    </Step4SingleCardTitle>
                    <Step4SingleCardDescribe
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      onClick={handleDisplayTypeChange}>
                      Change
                    </Step4SingleCardDescribe>
                  </>
                ) : null}
              </Step4SingleCardTextSingleLineFromStep2>
              <Step4SingleCardPriceFromStep2>
                {selectedCard ? (
                  <span style={{ fontWeight: "bold" }}>
                    {getPrice(selectedCard)}
                  </span>
                ) : null}
              </Step4SingleCardPriceFromStep2>
            </Step4SingleCardTextFromStep2>
            <Step4SingleCardTextSingleLineFromStep2Line></Step4SingleCardTextSingleLineFromStep2Line>
            <Step4SingleCardTextSingleLineSection>
              {" "}
              {selectedAddonsInStep4}
            </Step4SingleCardTextSingleLineSection>
          </Step4SingleCardTextSection>
        </Step4SingleCardSection>
        <Step4UnderSingleCard>
          <Step4SingleCardDescribe>
            Total
            {/* ({!isMonthly ? "per month" : "per year"}) */}
            Total ({displayType === "monthly" ? "per month" : "per year"})
          </Step4SingleCardDescribe>
          <Step4SingleCardPrice>
            <span
              style={{
                color: "var(--primary-purplish-blue)",
                fontWeight: "bold",
                fontSize: "20px",
              }}>
              {/* {totalPrice ? `$${totalPrice.toFixed(2)}` : ""} */}
              {totalPrice
                ? `${
                    displayType === "monthly"
                      ? "$" + totalPrice.toFixed(0) + "/mo"
                      : "$" + totalPrice.toFixed(0) + "/yr"
                  }`
                : ""}
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
