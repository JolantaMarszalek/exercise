import { useContext } from "react";
import { NightModeContext } from "../../context/theme.context";
import { ToggleWrapper, ToggleButton, ToggleSection } from "./Toggle.styled";
import { darkTheme } from "../../theme/themeStyles";

const Toggle = () => {
  const { toggleTheme, theme } = useContext(NightModeContext);
  console.log("Active:", theme === darkTheme);
  return (
    <ToggleWrapper>
      <ToggleSection>
        {" "}
        <img src="moon-outline.svg" />
        <b>Dark Mode</b>
        <ToggleButton onClick={toggleTheme} active={theme === darkTheme} />
      </ToggleSection>
    </ToggleWrapper>
  );
};

export default Toggle;
