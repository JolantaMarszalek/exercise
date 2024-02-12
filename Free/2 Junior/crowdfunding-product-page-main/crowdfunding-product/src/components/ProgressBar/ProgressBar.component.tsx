import React from "react";
import { ProgressBarSection, ProgressBarStyled } from "./ProgressBar.styled";

export const ProgressBar: React.FC<{ percentage: number }> = ({
  percentage,
  ...rest
}) => {
  return (
    <>
      <ProgressBarSection>
        <ProgressBarStyled percentage={percentage} {...rest} />
      </ProgressBarSection>
    </>
  );
};
