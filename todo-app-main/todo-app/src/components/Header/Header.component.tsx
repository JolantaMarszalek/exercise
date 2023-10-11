import { Button } from "../Button/Button.component";

import {
  HeaderSection,
  HeaderSectionLeft,
  HeaderSectionRight,
  Title,
} from "./Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderSection>
        {/* <img src="../../../../images/bg-desktop-light.jpg" /> */}
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
