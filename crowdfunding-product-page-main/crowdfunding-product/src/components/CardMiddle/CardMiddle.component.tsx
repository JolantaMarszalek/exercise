import { CardBottomSection } from "../CardBottom/CardBottom.styled";
import {
  CardMiddleSection,
  CardMiddleSectionTop,
  CardMiddleSectionTopSinglePart,
  CardMiddleSectionTopSinglePartDescribe,
  CardMiddleSectionTopSinglePartTitle,
} from "./CardMiddle.styled";

export const CardMiddle = () => {
  return (
    <>
      <CardMiddleSection>
        <CardMiddleSectionTop>
          <CardMiddleSectionTopSinglePart>
            <CardMiddleSectionTopSinglePartTitle>
              $89,914
            </CardMiddleSectionTopSinglePartTitle>
            <CardMiddleSectionTopSinglePartDescribe>
              of $100,000 backed
            </CardMiddleSectionTopSinglePartDescribe>
          </CardMiddleSectionTopSinglePart>
          <CardMiddleSectionTopSinglePart>
            <CardMiddleSectionTopSinglePartTitle>
              5,007
            </CardMiddleSectionTopSinglePartTitle>
            <CardMiddleSectionTopSinglePartDescribe>
              total backers
            </CardMiddleSectionTopSinglePartDescribe>
          </CardMiddleSectionTopSinglePart>
          <CardMiddleSectionTopSinglePart>
            <CardMiddleSectionTopSinglePartTitle>
              56
            </CardMiddleSectionTopSinglePartTitle>
            <CardMiddleSectionTopSinglePartDescribe>
              days left
            </CardMiddleSectionTopSinglePartDescribe>
          </CardMiddleSectionTopSinglePart>
        </CardMiddleSectionTop>
      </CardMiddleSection>
      <CardBottomSection></CardBottomSection>
    </>
  );
};
