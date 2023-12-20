import { Link } from "react-router-dom";
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
  Step4SingleCardTextSingleLineText,
} from "./Step4.styled";
import { ButtonLight } from "../Button/ButtonLight.component";
import { ButtonDarkSecond } from "../Button/ButtonDarkSecond.component";

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
            <Step4SingleCardTextSingleLine>
              <Step4SingleCardTextSingleLineText>
                <Step4SingleCardTitle>Arcade (Monthly)</Step4SingleCardTitle>
                <Step4SingleCardDescribe>Change</Step4SingleCardDescribe>
              </Step4SingleCardTextSingleLineText>
              <Step4SingleCardPrice>
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                  }}>
                  +$9/mo
                </span>
              </Step4SingleCardPrice>
            </Step4SingleCardTextSingleLine>
            <Step4SingleCardTextSingleLine>
              <Step4SingleCardDescribe>Online service</Step4SingleCardDescribe>
              <Step4SingleCardPrice>+$1/mo</Step4SingleCardPrice>
            </Step4SingleCardTextSingleLine>
            <Step4SingleCardTextSingleLine>
              {" "}
              <Step4SingleCardDescribe>
                Larger storage
              </Step4SingleCardDescribe>{" "}
              <Step4SingleCardPrice>+$2/mo</Step4SingleCardPrice>
            </Step4SingleCardTextSingleLine>
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
