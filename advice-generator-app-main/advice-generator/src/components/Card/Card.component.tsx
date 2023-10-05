import { Button } from "../Button/Button.styled";
import {
  AdviceStyled,
  ButtonStyled,
  CardBackground,
  CardStyled,
  QuoteStyled,
} from "./Card.styled";

export const Card = () => {
  return (
    <>
      <CardBackground>
        <CardStyled>
          <AdviceStyled>ADVICE</AdviceStyled>
          <QuoteStyled>Quote</QuoteStyled>
          <ButtonStyled>
            <Button></Button>
          </ButtonStyled>
        </CardStyled>
      </CardBackground>
    </>
  );
};
