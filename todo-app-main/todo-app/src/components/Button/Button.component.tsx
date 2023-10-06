import { useContext } from "react";
import { NightModeContext } from "../../context/theme.context";
import { ToggleWrapper, ToggleButton, ToggleSection } from "./Button.styled";
import { darkTheme } from "../../theme/themeStyles";

export const Toggle = () => {
  const { toggleTheme, theme } = useContext(NightModeContext);
  console.log("Active:", theme === darkTheme);
  return (
    <ToggleWrapper>
      <ToggleSection>
        <b>Dark Mode</b>
        <ToggleButton onClick={toggleTheme} active={theme === darkTheme} />
      </ToggleSection>
    </ToggleWrapper>
  );
};
