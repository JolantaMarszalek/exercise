// import Toggle from "../Toggle/Toggle.component";
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
        <HeaderSectionRight>{/* <Toggle /> */}</HeaderSectionRight>
      </HeaderSection>
    </>
  );
};

export default Header;
