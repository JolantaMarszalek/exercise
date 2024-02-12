import { ButtonContainer, ButtonDarkStyle } from "./Button.styled";
import React from "react";

interface ButtonDarkProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const ButtonDark: React.FC<ButtonDarkProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <>
      <ButtonContainer>
        <ButtonDarkStyle type={type} onClick={onClick}>
          {children}
        </ButtonDarkStyle>
      </ButtonContainer>
    </>
  );
};
