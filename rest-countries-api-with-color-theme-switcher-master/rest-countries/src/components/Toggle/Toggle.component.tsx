import { useContext } from "react";
import { NightModeContext } from "../../context/theme.context";
import { ToggleWrapper, ToggleButton } from "./Toggle.styled";
import { darkTheme } from "../../theme/themeStyles";

const Toggle = () => {
  const { toggleTheme, theme } = useContext(NightModeContext);
  console.log("Active:", theme === darkTheme);
  return (
    <ToggleWrapper>
      <img src="moon-outline.svg" />
      <b>Dark Mode</b>
      <ToggleButton onClick={toggleTheme} active={theme === darkTheme} />
    </ToggleWrapper>
  );
};

export default Toggle;
