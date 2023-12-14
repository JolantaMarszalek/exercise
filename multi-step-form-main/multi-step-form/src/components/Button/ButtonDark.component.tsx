import { ButtonContainer, ButtonDarkStyle } from "./Button.styled";
import React from "react";

export const ButtonDark: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <ButtonContainer>
        <ButtonDarkStyle>{children}</ButtonDarkStyle>
      </ButtonContainer>
    </>
  );
};
