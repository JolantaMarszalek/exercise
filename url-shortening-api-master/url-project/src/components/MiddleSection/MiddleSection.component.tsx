import React from "react";
import {
  MiddleSectionDescribe,
  MiddleSectionStyled,
  MiddleSectionText,
  MiddleSectionTitle,
} from "./MiddleSection.styled";
import { MiddleCard } from "../MiddleCard/MiddleCard.component";
import {
  MiddleCardSection,
  MiddleCardTitle,
} from "../MiddleCard/MiddleCard.styled";

export const MiddleSection = () => {
  return (
    <MiddleSectionStyled>
      <MiddleSectionText>
        <MiddleSectionTitle>Advanced Statistics</MiddleSectionTitle>
        <MiddleSectionDescribe>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </MiddleSectionDescribe>
      </MiddleSectionText>
      <MiddleCard></MiddleCard>
    </MiddleSectionStyled>
  );
};
