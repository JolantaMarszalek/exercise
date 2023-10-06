import { Button } from "../Button/Button.component";
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
          <Title>TO DO</Title>
        </HeaderSectionLeft>
        <HeaderSectionRight>
          <Button />
        </HeaderSectionRight>
      </HeaderSection>
    </>
  );
};

export default Header;
