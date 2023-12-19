import { Link } from "react-router-dom";
import { ButtonDark } from "../Button/ButtonDark.component";
import { Input } from "../Input/Input.component";
import {
  Step1AboveInput,
  Step1ButtonContainer,
  Step1Describe,
  Step1SectionStyle,
  Step1Title,
} from "./Step1.styled";

interface Step1SectionProps {
  placeholder?: string;
}

export const Step1Section: React.FC<Step1SectionProps> = () => {
  return (
    <Step1SectionStyle>
      <Step1Title>Personal info</Step1Title>
      <Step1Describe>
        Please provide your name, email address, and phone number.
      </Step1Describe>
      <Step1AboveInput>Name</Step1AboveInput>
      <Input placeholder=" e.g. Stephen King"></Input>
      <Step1AboveInput>Email Address</Step1AboveInput>{" "}
      <Input placeholder=" e.g. stephenking@lorem.com"></Input>
      <Step1AboveInput>Phone Number</Step1AboveInput>{" "}
      <Input placeholder=" e.g. +1 234 567 890"></Input>
      <Step1ButtonContainer>
        <Link to="/selectPlan">
          <ButtonDark>Next Step</ButtonDark>
        </Link>
      </Step1ButtonContainer>
    </Step1SectionStyle>
  );
};
