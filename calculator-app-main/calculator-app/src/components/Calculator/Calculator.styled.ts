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
  /* margin: 50px auto; */
  padding: 20px;
  height: 100vh;
  /* border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  background-color: var(--bg-very-dark-desaturated-blue-main-bg);

  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

export const CalculatorSectionToggle = styled.section`
  display: flex;
  font-family: "League Spartan", sans-serif;
  justify-content: space-between;
  align-items: center;

  width: 400px;
  margin: 10px auto;
  padding: 20px;
  /* border: 1px solid #ccc; */
  /* border-radius: 10px; */
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  /* background-color: var(--bg-very-dark-desaturated-blue-screen-bg); */
`;

export const CalculatorSectionTop = styled.section`
  display: flex;
  font-family: "League Spartan", sans-serif;
  justify-content: center;
  width: 400px;
  margin: 10px auto;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: var(--bg-very-dark-desaturated-blue-screen-bg);
`;
export const CalculatorSectionBottom = styled.section`
  font-family: "League Spartan", sans-serif;
  width: 400px;
  margin: 10px auto;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: var(--bg-very-dark-desaturated-blue-togglee-bg-keypad-bg);
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
  color: white;
  font-size: 30px;
`;

export const CalculatorSectionToggleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
`;
export const CalculatorSectionToggleToggle = styled.div`
  display: flex;
  /* grid-template-columns: repeat(2, 1fr); */
  gap: 10px;
  margin-top: 10px;
`;
export const CalculatorSectionToggleTextToggle = styled.div`
  display: flex;
  /* grid-template-columns: repeat(2, 1fr); */
  gap: 10px;
  margin-top: 10px;
  color: white;
  font-size: 15px;
`;

export const ThemeToggleButton = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  padding: 8px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`;
