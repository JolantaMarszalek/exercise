import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--background-color-app);
  border-radius: 5px;
  color: var(--color-text);
  padding: 15px 30px;
  display: inline-block;
  font-size: 15px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonSmall = styled.button`
  background-color: var(--background-color-app);
  border-radius: 5px;
  color: var(--color-text);
  padding: 10px 25px;
  display: inline-block;
  font-size: 12px;
`;
