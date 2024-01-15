import { useState } from "react";
import {
  ButtonContainer,
  ButtonContainer2,
  CalculatorSection,
  CalculatorSectionBottom,
  CalculatorSectionToggle,
  CalculatorSectionToggleContainer,
  CalculatorSectionToggleNumberToggle,
  CalculatorSectionToggleSectionToggle,
  CalculatorSectionToggleSingleNumberToggle,
  CalculatorSectionToggleText,
  CalculatorSectionToggleTextToggle,
  CalculatorSectionToggleToggle,
  CalculatorSectionTop,
  SliderDot,
  ThemeDotContainer,
  ThemeSlider,
  // ThemeToggleButton,
} from "./Calculator.styled";
import { Button } from "../Button/Button.styled";
import { ButtonDel } from "../Button/ButtonDel.styled";
import { ButtonReset } from "../Button/ButtonReset.styled";
import { ButtonEqual } from "../Button/ButtonEqual.styled";
import { Input } from "../Input/Input.component";
import { ThemeProvider } from "styled-components";
import { themes } from "./../theme/theme";

export const Calculator = () => {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("default");

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const result = new Function("return " + input)();
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleReset = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => {
  //     switch (prevTheme) {
  //       case "default":
  //         return "dark";
  //       case "dark":
  //         return "light";
  //       case "light":
  //         return "default";
  //       default:
  //         return "default";
  //     }
  //   });
  // };
  const toggleTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <CalculatorSection>
        <CalculatorSectionToggle>
          <CalculatorSectionToggleText>calc</CalculatorSectionToggleText>
          <CalculatorSectionToggleContainer>
            <CalculatorSectionToggleTextToggle>
              THEME
            </CalculatorSectionToggleTextToggle>
            <CalculatorSectionToggleSectionToggle>
              {" "}
              <CalculatorSectionToggleNumberToggle>
                <CalculatorSectionToggleSingleNumberToggle>
                  1
                </CalculatorSectionToggleSingleNumberToggle>
                <CalculatorSectionToggleSingleNumberToggle>
                  2
                </CalculatorSectionToggleSingleNumberToggle>
                <CalculatorSectionToggleSingleNumberToggle>
                  3
                </CalculatorSectionToggleSingleNumberToggle>
              </CalculatorSectionToggleNumberToggle>
              <CalculatorSectionToggleToggle>
                {" "}
                <ThemeSlider>
                  <ThemeDotContainer>
                    {Object.keys(themes).map((themeKey) => (
                      <SliderDot
                        key={themeKey}
                        active={theme === themeKey}
                        onClick={() => toggleTheme(themeKey)}
                      />
                    ))}
                  </ThemeDotContainer>
                  {/* <ThemeToggleButton onClick={() => toggleTheme("default")} /> */}
                </ThemeSlider>
              </CalculatorSectionToggleToggle>
            </CalculatorSectionToggleSectionToggle>
          </CalculatorSectionToggleContainer>
        </CalculatorSectionToggle>
        <CalculatorSectionTop>
          <Input someValue={input} />
        </CalculatorSectionTop>
        <CalculatorSectionBottom>
          <ButtonContainer>
            <Button onClick={() => handleButtonClick("7")}>7</Button>
            <Button onClick={() => handleButtonClick("8")}>8</Button>
            <Button onClick={() => handleButtonClick("9")}>9</Button>
            <ButtonDel onClick={handleDelete}>DEL</ButtonDel>
            <Button onClick={() => handleButtonClick("4")}>4</Button>
            <Button onClick={() => handleButtonClick("5")}>5</Button>
            <Button onClick={() => handleButtonClick("6")}>6</Button>
            <Button onClick={() => handleButtonClick("+")}>+</Button>
            <Button onClick={() => handleButtonClick("1")}>1</Button>
            <Button onClick={() => handleButtonClick("2")}>2</Button>
            <Button onClick={() => handleButtonClick("3")}>3</Button>
            <Button onClick={() => handleButtonClick("-")}>-</Button>
            <Button onClick={() => handleButtonClick(".")}>.</Button>
            <Button onClick={() => handleButtonClick("0")}>0</Button>
            <Button onClick={() => handleButtonClick("/")}>/</Button>
            <Button onClick={() => handleButtonClick("*")}>*</Button>{" "}
          </ButtonContainer>
          <ButtonContainer2>
            {" "}
            <ButtonReset onClick={handleReset}>RESET</ButtonReset>
            <ButtonEqual onClick={handleCalculate}>=</ButtonEqual>
          </ButtonContainer2>
        </CalculatorSectionBottom>
      </CalculatorSection>{" "}
    </ThemeProvider>
  );
};
