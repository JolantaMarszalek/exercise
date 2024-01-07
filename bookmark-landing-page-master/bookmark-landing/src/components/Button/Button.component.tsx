import React from "react";
import { ButtonContainer, ButtonStyle } from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "submit" | "reset" | "button";
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <ButtonStyle>
      <ButtonContainer type={type} onClick={onClick}>
        {children}
      </ButtonContainer>
    </ButtonStyle>
  );
};
