// import { useState } from "react";
import { useEffect, useState } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar.component";
import {
  CardMiddleSection,
  CardMiddleSectionBottom,
  CardMiddleSectionTop,
  CardMiddleSectionTopSinglePart,
  CardMiddleSectionTopSinglePartDescribe,
  CardMiddleSectionTopSinglePartMiddle,
  CardMiddleSectionTopSinglePartTitle,
} from "./CardMiddle.styled";

interface CardMiddleProps {
  pledgedAmount: number;
  updatePledge: (amount: number) => void;
}

export const CardMiddle: React.FC<CardMiddleProps> = ({
  pledgedAmount,
  // updatePledge,
}) => {
  const [localPledgedAmount, setLocalPledgedAmount] = useState(pledgedAmount);

  useEffect(() => {
    console.log("Updated local pledged amount:", pledgedAmount);
    setLocalPledgedAmount(pledgedAmount);
  }, [pledgedAmount]);

  const goalAmount = 100000;
  const pledgePercentage = (pledgedAmount / goalAmount) * 100;

  return (
    <>
      <CardMiddleSection>
        <CardMiddleSectionTop>
          <CardMiddleSectionTopSinglePart>
            <CardMiddleSectionTopSinglePartTitle>
              {/* $89,914 */} ${localPledgedAmount}
            </CardMiddleSectionTopSinglePartTitle>
            <CardMiddleSectionTopSinglePartDescribe>
              of $100,000 backed
            </CardMiddleSectionTopSinglePartDescribe>
          </CardMiddleSectionTopSinglePart>
          <CardMiddleSectionTopSinglePartMiddle>
            <CardMiddleSectionTopSinglePartTitle>
              5,007
            </CardMiddleSectionTopSinglePartTitle>
            <CardMiddleSectionTopSinglePartDescribe>
              total backers
            </CardMiddleSectionTopSinglePartDescribe>
          </CardMiddleSectionTopSinglePartMiddle>
          <CardMiddleSectionTopSinglePart>
            <CardMiddleSectionTopSinglePartTitle>
              56
            </CardMiddleSectionTopSinglePartTitle>
            <CardMiddleSectionTopSinglePartDescribe>
              days left
            </CardMiddleSectionTopSinglePartDescribe>
          </CardMiddleSectionTopSinglePart>
        </CardMiddleSectionTop>
        <CardMiddleSectionBottom>
          <ProgressBar percentage={pledgePercentage} />
        </CardMiddleSectionBottom>
      </CardMiddleSection>
    </>
  );
};
