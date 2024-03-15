import {
  MiddleSection,
  MiddleSectionBottom,
  MiddleSectionBottomSingle,
  MiddleSectionBottomSingleDescribe,
  MiddleSectionBottomSingleImage,
  MiddleSectionBottomSingleTitle,
  MiddleSectionTitle,
} from "./Middle.styled";

export const Middle = () => {
  return (
    <MiddleSection>
      <MiddleSectionTitle>We’re different</MiddleSectionTitle>
      <MiddleSectionBottom>
        <MiddleSectionBottomSingle>
          <MiddleSectionBottomSingleImage></MiddleSectionBottomSingleImage>
          <MiddleSectionBottomSingleTitle>
            Snappy Process
          </MiddleSectionBottomSingleTitle>
          <MiddleSectionBottomSingleDescribe>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </MiddleSectionBottomSingleDescribe>
        </MiddleSectionBottomSingle>
        <MiddleSectionBottomSingle>
          <MiddleSectionBottomSingleImage></MiddleSectionBottomSingleImage>
          <MiddleSectionBottomSingleTitle>
            Affordable Prices
          </MiddleSectionBottomSingleTitle>
          <MiddleSectionBottomSingleDescribe>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </MiddleSectionBottomSingleDescribe>
        </MiddleSectionBottomSingle>
        <MiddleSectionBottomSingle>
          <MiddleSectionBottomSingleImage></MiddleSectionBottomSingleImage>
          <MiddleSectionBottomSingleTitle>
            People First
          </MiddleSectionBottomSingleTitle>
          <MiddleSectionBottomSingleDescribe>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </MiddleSectionBottomSingleDescribe>
        </MiddleSectionBottomSingle>
      </MiddleSectionBottom>
    </MiddleSection>
  );
};
