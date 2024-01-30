import { CardBottom } from "../CardBottom/CardBottom.component";
import { CardMiddle } from "../CardMiddle/CardMiddle.component";
import { CardTop } from "../CardTop/CardTop.component";
import { CardsSection } from "./Cards.styled";

export const Cards = () => {
  return (
    <>
      <CardsSection>
        <CardTop />
        <CardMiddle />
        <CardBottom />
      </CardsSection>
    </>
  );
};
