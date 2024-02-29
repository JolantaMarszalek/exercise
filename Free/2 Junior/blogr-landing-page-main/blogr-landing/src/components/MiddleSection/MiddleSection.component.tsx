import { MiddleSectionStyled } from "./MiddleSection.styled";

import { ReactNode } from "react";

export const MiddleSection = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MiddleSectionStyled>{children}</MiddleSectionStyled>
    </>
  );
};
