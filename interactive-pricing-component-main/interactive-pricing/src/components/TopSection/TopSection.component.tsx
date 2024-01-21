import {
  TopSectionDescribe,
  TopSectionStyled,
  TopSectionTitle,
} from "./TopSection.styled";

export const TopSection = () => {
  return (
    <>
      <TopSectionStyled>
        <TopSectionTitle>Simple, traffic-based pricing</TopSectionTitle>
        <TopSectionDescribe>
          Sign-up for our 30-day trial. No credit card required.
        </TopSectionDescribe>
      </TopSectionStyled>
    </>
  );
};
