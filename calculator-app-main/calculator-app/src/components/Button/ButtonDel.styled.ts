import styled from "styled-components";

export const ButtonDel = styled.button`
  font-family: "League Spartan", sans-serif;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  height: 50px;
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.buttonDelColor};
  box-shadow: 0 5px ${(props) => props.theme.buttonDelShadow};
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme.buttonDelText};
`;
