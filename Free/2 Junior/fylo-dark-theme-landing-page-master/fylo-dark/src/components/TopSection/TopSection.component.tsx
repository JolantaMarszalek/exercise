import {
  FullWidthSVG,
  TopSectionBackground,
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
        <TopSectionBackground>
          <FullWidthSVG
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1454 449"
            preserveAspectRatio="none">
            <defs>
              <path id="a" d="M0 0h1454v449H0z" />
            </defs>
            <g transform="translate(-14)" fill="none" fill-rule="evenodd">
              <mask id="b" fill="#fff">
                <use xlinkHref="#a" />
              </mask>
              <path
                d="M14 413.954c90.836-5.359 176.206-50.375 256.111-135.046C389.968 151.9 364.01 105.164 563.005 148.686 762 192.207 745.05 163.699 873 63.13c127.95-100.57 211-77.554 289 44.667 78 122.222 151 162.895 284 207.778 88.667 29.921 92.03 848.285 10.091 2455.09H14V413.956z"
                fill="#181F2B"
                mask="url(#b)"
              />
            </g>
          </FullWidthSVG>
        </TopSectionBackground>
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
