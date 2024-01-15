import styled from "styled-components";

export const Button = styled.button`
  font-family: "League Spartan", sans-serif;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: flex-end;
  font-size: 32px;
  padding: 10px;
  height: 50px;
  cursor: pointer;
  background-color: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px ${(props) => props.theme.buttonShadow};
`;
