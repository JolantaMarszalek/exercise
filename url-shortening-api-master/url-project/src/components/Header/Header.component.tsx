import { Link } from "react-router-dom";
import { HeaderSection } from "./Header.styled";
import React from "react";
import { ButtonS } from "../Buttons/Buttons.styled";

export const Header = () => {
  return (
    <HeaderSection>
      <h2>Shortly</h2>
      <Link to="">Features</Link>
      <Link to="">Pricing</Link>
      <Link to="">Resources</Link>
      <ButtonS>Login</ButtonS>
      <ButtonS>Sign Up</ButtonS>
    </HeaderSection>
  );
};
