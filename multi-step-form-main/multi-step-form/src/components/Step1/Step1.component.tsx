import { Link } from "react-router-dom";
import { Button } from "../Button/Button.component";
import { Input } from "../Input/Input.component";
import {
  Step1AboveInput,
  Step1ButtonContainer,
  Step1Describe,
  Step1SectionStyle,
  Step1Title,
} from "./Step1.styled";

export const Step1Section = () => {
  return (
    <Step1SectionStyle>
      <Step1Title>Personal info</Step1Title>
      <Step1Describe>
        Please provide your name, email address, and phone number.
      </Step1Describe>
      <Step1AboveInput>Name</Step1AboveInput>
      <Input></Input>
      <Step1AboveInput>Email Address</Step1AboveInput> <Input></Input>
      <Step1AboveInput>Phone Number</Step1AboveInput> <Input></Input>
      <Step1ButtonContainer>
        <Link to="/selectPlan">
          <Button>Next Step</Button>
        </Link>
      </Step1ButtonContainer>
    </Step1SectionStyle>
  );
};
