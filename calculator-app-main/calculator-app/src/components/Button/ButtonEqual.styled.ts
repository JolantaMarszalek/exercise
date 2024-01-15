import styled from "styled-components";

export const ButtonEqual = styled.button`
  font-family: "League Spartan", sans-serif;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: flex-end;
  font-size: 28px;
  padding: 10px;
  cursor: pointer;
  color: var(--text-white);
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme.buttonEqualText};
  background-color: ${(props) => props.theme.buttonEqualColor};
  box-shadow: 0 5px ${(props) => props.theme.buttonEqualShadow};
`;
