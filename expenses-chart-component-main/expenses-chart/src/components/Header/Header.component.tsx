import { Link } from "react-router-dom";
import {
  HeaderSection,
  HeaderSectionButton,
  HeaderSectionLink,
  HeaderSectionLogo,
} from "./Header.styled";
// import { ButtonS } from "../Buttons/Buttons.styled";

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderSectionLogo>
        <Link to="/"></Link>
      </HeaderSectionLogo>
      <HeaderSectionLink>
        <Link
          to="not-found"
          style={{ textDecoration: "none", color: "inherit" }}>
          Features
        </Link>

        <Link
          to="not-found"
          style={{ textDecoration: "none", color: "inherit" }}>
          Pricing
        </Link>

        <Link
          to="not-found"
          style={{ textDecoration: "none", color: "inherit" }}>
          Contact
        </Link>
      </HeaderSectionLink>
      <HeaderSectionButton>
        {/* <ButtonS>Login</ButtonS> */}
        {/* <ButtonS>Sign Up</ButtonS> */}
      </HeaderSectionButton>
    </HeaderSection>
  );
};
