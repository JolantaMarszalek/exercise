import {
  TopSectionImage,
  TopSectionStyled,
  TopSectionText,
  TopSectionTextButton,
  TopSectionTextDescribe,
  TopSectionTextTitle,
} from "./TopSection.styled";
import React from "react";
import topSectionImage from "../../../../images/illustration-intro.png";

export const TopSection: React.FC = () => {
  return (
    <TopSectionStyled>
      <TopSectionImage
        src={topSectionImage}
        alt="Image TopSection"></TopSectionImage>
      <TopSectionText>
        <TopSectionTextTitle>
          All your files in one secure location, accessible anywhere.
        </TopSectionTextTitle>
        <TopSectionTextDescribe>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </TopSectionTextDescribe>
        <TopSectionTextButton>Get Started</TopSectionTextButton>
      </TopSectionText>
    </TopSectionStyled>
  );
};
