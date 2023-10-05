import { Button } from "../Button/Button.styled";
import { CardBackground, CardStyled } from "./Card.styled";

export const Card = () => {
  return (
    <>
      <CardBackground>
        <CardStyled>
          <p>ADVICE</p>
          <p>Quote</p>
          <Button></Button>
        </CardStyled>
      </CardBackground>
    </>
  );
};
