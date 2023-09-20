import { Link } from "react-router-dom";
import Toggle from "../Toggle/Toggle.component";
import {
  HeaderSection,
  HeaderSectionLeft,
  HeaderSectionRight,
  Title,
} from "./Header.styled";

const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderSectionLeft>
          <Title>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              {" "}
              Where in the world?
            </Link>
          </Title>
        </HeaderSectionLeft>
        <HeaderSectionRight>
          <Toggle />
        </HeaderSectionRight>
      </HeaderSection>
    </>
  );
};

export default Header;
