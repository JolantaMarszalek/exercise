import { ButtonContainer, ButtonStyle } from "./Button.styled";

export const Button = ({
  onClick,
  type,
}: {
  onClick?: () => void;
  type: "submit" | "reset" | "button";
}) => {
  return (
    <>
      <ButtonStyle>
        <ButtonContainer type={type} onClick={onClick}>
          Subscribe to monthly newsletter
        </ButtonContainer>
      </ButtonStyle>
    </>
  );
};
