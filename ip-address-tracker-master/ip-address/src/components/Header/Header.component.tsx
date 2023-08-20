import { SearchBar } from "../SearchBar/SearchBar.component";
import { HeaderSection, Title } from "./Header.styled";

const Header = () => {
  return (
    <>
      <HeaderSection>
        {/* <img src="../../../../images/pattern-bg-desktop.png" /> */}
        <Title>IP Address Tracker </Title>
        <SearchBar />
      </HeaderSection>
    </>
  );
};

export default Header;
