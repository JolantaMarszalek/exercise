import styled, { DefaultTheme } from "styled-components";

interface CalculatorSectionProps {
  theme: DefaultTheme;
}

export const CalculatorSection = styled.div<CalculatorSectionProps>`
  font-family: "League Spartan", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  padding: 20px;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

export const CalculatorSectionToggle = styled.section`
  display: flex;
  font-family: "League Spartan", sans-serif;
  justify-content: space-between;
  align-items: flex-end;
  width: 400px;
  margin: 10px auto;
  padding: 20px;
  color: ${(props) => props.theme.textColor};
`;

export const CalculatorSectionTop = styled.section`
  display: flex;
  font-family: "League Spartan", sans-serif;
  justify-content: center;
  width: 400px;
  margin: 10px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.backgroundTopColor};
`;

export const CalculatorSectionBottom = styled.section`
  font-family: "League Spartan", sans-serif;
  width: 400px;
  margin: 10px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.backgroundBottomColor};
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const ButtonContainer2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

export const CalculatorSectionToggleText = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
  font-size: 30px;
`;

export const CalculatorSectionToggleContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
  align-items: flex-end;
  color: ${(props) => props.theme.textToggleColor};
`;

export const CalculatorSectionToggleToggle = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const CalculatorSectionToggleTextToggle = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  font-size: 15px;
`;

export const CalculatorSectionToggleSectionToggle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const CalculatorSectionToggleNumberToggle = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  margin-top: 10px;
  font-size: 15px;
`;

export const CalculatorSectionToggleSingleNumberToggle = styled.div``;

export const ThemeToggleButton = styled.button`
  position: relative;
  background-color: ${(props) => props.theme.backgroundToggle};
  color: ${(props) => props.theme.textColor};
  padding: 8px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    opacity: 0.8;
  }
`;

export const SliderDot = styled.div<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? props.theme.backgroundToggleSliderDot : "transparent"};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    background-color: ${(props) => props.theme.backgroundToggle};
    border-radius: 50%;
    z-index: -1;
  }
`;

export const ThemeSlider = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeDotContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundToggle};
  border-radius: 10px;
  display: flex;
  gap: 8px;
`;
