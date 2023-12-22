import { ButtonContainer, ButtonDarkSecondStyle } from "./Button.styled";
import React from "react";

interface ButtonDarkSecondProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const ButtonDarkSecond: React.FC<ButtonDarkSecondProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <>
      <ButtonContainer>
        <ButtonDarkSecondStyle type={type} onClick={onClick}>
          {children}
        </ButtonDarkSecondStyle>
      </ButtonContainer>
    </>
  );
};
