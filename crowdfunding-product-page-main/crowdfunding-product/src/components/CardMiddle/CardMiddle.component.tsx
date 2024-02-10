// import { useState } from "react";
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
  updatePledge,
}) => {
  console.log("Pledged amount in CardMiddle:", pledgedAmount);

  // const [pledgedAmount, setPledgedAmount] = useState(89914);
  const goalAmount = 100000;
  const pledgePercentage = (pledgedAmount / goalAmount) * 100;
  // const [currentPledgedAmount, setCurrentPledgedAmount] =
  //   useState(pledgedAmount);

  // const updatePledge = (amount: number) => {
  //   setPledgedAmount(amount);
  // };

  return (
    <>
      <CardMiddleSection>
        <CardMiddleSectionTop>
          <CardMiddleSectionTopSinglePart>
            <CardMiddleSectionTopSinglePartTitle>
              {/* $89,914 */} ${pledgedAmount.toLocaleString()}
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
