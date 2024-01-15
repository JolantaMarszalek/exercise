import styled from "styled-components";

export const ButtonReset = styled.button`
  font-family: "League Spartan", sans-serif;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  padding: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.buttonResetText};
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.buttonResetColor};
  box-shadow: 0 5px ${(props) => props.theme.buttonResetShadow};
`;
