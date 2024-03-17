import {
  TopSection,
  TopSectionLeft,
  TopSectionLeftButton,
  TopSectionLeftDescribe,
  TopSectionLeftText,
  TopSectionLeftTitle,
  TopSectionRight,
  TopSectionRightImage,
} from "./Top.styled";

import imageDesktop from "../../../../images/image-intro-desktop.jpg";

export const Top = () => {
  return (
    <TopSection>
      <TopSectionLeft>
        <TopSectionLeftText>
          <TopSectionLeftTitle>Humanizing your insurance.</TopSectionLeftTitle>
          <TopSectionLeftDescribe>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </TopSectionLeftDescribe>
          <TopSectionLeftButton>View plans</TopSectionLeftButton>
        </TopSectionLeftText>
      </TopSectionLeft>
      <TopSectionRight>
        <TopSectionRightImage
          src={imageDesktop}
          alt="Image desktop"></TopSectionRightImage>
      </TopSectionRight>
    </TopSection>
  );
};
