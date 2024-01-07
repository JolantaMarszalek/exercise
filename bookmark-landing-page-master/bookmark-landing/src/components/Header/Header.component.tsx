import { Link } from "react-router-dom";
import {
  HeaderSection,
  HeaderSectionButton,
  HeaderSectionLink,
  HeaderSectionLogo,
} from "./Header.styled";
import { Button } from "../Button/Button.component";

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
        <Button type="submit">Login</Button>
      </HeaderSectionButton>
    </HeaderSection>
  );
};
