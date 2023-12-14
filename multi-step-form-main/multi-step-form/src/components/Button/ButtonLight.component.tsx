import { ButtonContainer, ButtonLightStyle } from "./Button.styled";
import React from "react";

export const ButtonLight: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <ButtonContainer>
        <ButtonLightStyle>{children}</ButtonLightStyle>
      </ButtonContainer>
    </>
  );
};
