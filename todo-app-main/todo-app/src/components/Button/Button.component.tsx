import { useContext } from "react";
import { NightModeContext } from "../../context/theme.context";
import { ToggleWrapper, ToggleButton, ToggleSection } from "./Button.styled";
import { darkTheme } from "../../theme/themeStyles";

import LightModeIcon from "../../../../images/icon-sun.svg";
import DarkModeIcon from "../../../../images/icon-moon.svg";

export const Button = () => {
  const { toggleTheme, theme } = useContext(NightModeContext);
  console.log("Active:", theme === darkTheme);
  const iconSrc = theme === darkTheme ? DarkModeIcon : LightModeIcon;

  return (
    <ToggleWrapper>
      <ToggleSection>
        {/* <img src={iconSrc} alt="Theme Icon" width="26" height="26" /> */}
        <ToggleButton onClick={toggleTheme} active={theme === darkTheme}>
          {" "}
          <img src={iconSrc} alt="Theme Icon" width="26" height="26" />
        </ToggleButton>
      </ToggleSection>
    </ToggleWrapper>
  );
};
