import { Link } from "react-router-dom";
import { HeaderSection } from "./Header.styled";
import React from "react";

export const Header = () => {
  return (
    <HeaderSection>
      <h2>Shortly</h2>
      <Link to="">Features</Link>
      <Link to="">Pricing</Link>
      <Link to="">Resources</Link>
      <button>Login</button>
      <button>Sign Up</button>
    </HeaderSection>
  );
};
