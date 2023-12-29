import { ButtonContainer, ButtonStyle } from "./Button.styled";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <>
      <ButtonContainer>
        <ButtonStyle type={type} onClick={onClick}>
          {children}
        </ButtonStyle>
      </ButtonContainer>
    </>
  );
};
