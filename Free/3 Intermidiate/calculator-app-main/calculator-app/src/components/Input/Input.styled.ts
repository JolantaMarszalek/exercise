import styled from "styled-components";

export const InputStyled = styled.input`
  display: flex;
  font-family: "League Spartan", sans-serif;
  font-size: 32px;
  padding: 10px;
  border: 0;
  background-color: ${(props) => props.theme.backgroundInputColor};
  color: ${(props) => props.theme.textInputColor};
  outline: none;
  text-align: end;
`;
