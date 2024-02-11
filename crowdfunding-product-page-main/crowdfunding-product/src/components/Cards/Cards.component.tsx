import { useState } from "react";
import { CardBottom } from "../CardBottom/CardBottom.component";
import { CardMiddle } from "../CardMiddle/CardMiddle.component";
import { CardTop } from "../CardTop/CardTop.component";
import { CardsSection } from "./Cards.styled";

export const Cards: React.FC = () => {
  const [pledgedAmount, setPledgedAmount] = useState(89914);

  const updatePledge = (amount: number) => {
    console.log("New pledge amount:", amount);
    setPledgedAmount(amount);
  };
  return (
    <>
      <CardsSection>
        <CardTop />
        <CardMiddle pledgedAmount={pledgedAmount} updatePledge={updatePledge} />
        <CardBottom />
      </CardsSection>
    </>
  );
};
