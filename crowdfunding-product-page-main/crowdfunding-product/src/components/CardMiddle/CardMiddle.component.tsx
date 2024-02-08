import {
  CardMiddleSection,
  CardMiddleSectionBottom,
  CardMiddleSectionTop,
  CardMiddleSectionTopSinglePart,
  CardMiddleSectionTopSinglePartDescribe,
  CardMiddleSectionTopSinglePartMiddle,
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
      </CardMiddleSection>
      <CardMiddleSectionBottom></CardMiddleSectionBottom>
    </>
  );
};
