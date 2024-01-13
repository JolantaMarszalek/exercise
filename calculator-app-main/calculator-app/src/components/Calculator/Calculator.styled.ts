import styled from "styled-components";

export const CalculatorSection = styled.section`
  font-family: "League Spartan", sans-serif;
  width: auto;
  /* margin: 50px auto; */
  padding: 20px;
  /* border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  background-color: var(--bg-very-dark-desaturated-blue-main-bg);
`;

export const CalculatorSectionTop = styled.section`
  display: flex;
  font-family: "League Spartan", sans-serif;
  justify-content: center;
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: var(--bg-very-dark-desaturated-blue-screen-bg);
`;
export const CalculatorSectionBottom = styled.section`
  font-family: "League Spartan", sans-serif;
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
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
