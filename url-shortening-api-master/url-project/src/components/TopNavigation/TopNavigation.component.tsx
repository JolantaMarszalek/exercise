import { ButtonM } from "../Buttons/Buttons.styled";

import React from "react";
import {
  TopNavigationDescribe,
  TopNavigationSection,
  TopNavigationTitle,
} from "./TopNavigation.styled";

export const TopNavigation = () => {
  return (
    <TopNavigationSection>
      {/* <TopNavigationText> */}
      <TopNavigationTitle>More than just shorter links</TopNavigationTitle>
      <TopNavigationDescribe>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </TopNavigationDescribe>
      {/* </TopNavigationText> */}
      <ButtonM>Get Started</ButtonM>
    </TopNavigationSection>
  );
};
