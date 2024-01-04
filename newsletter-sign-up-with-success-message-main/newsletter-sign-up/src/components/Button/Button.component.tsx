import { ButtonContainer, ButtonStyle } from "./Button.styled";

export const Button = ({ type }: { type: "submit" | "reset" | "button" }) => {
  return (
    <>
      <ButtonStyle>
        <ButtonContainer type={type}>
          Subscribe to monthly newsletter
        </ButtonContainer>
      </ButtonStyle>
    </>
  );
};
