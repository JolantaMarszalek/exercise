import { ButtonContainer, ButtonStyle } from "./Button.styled";
import React from "react";

export const Button: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <ButtonContainer>
        <ButtonStyle>{children}</ButtonStyle>
      </ButtonContainer>
    </>
  );
};
