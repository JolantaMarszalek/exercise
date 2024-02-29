import { TopSectionStyled } from "./TopSection.styled";

import { ReactNode } from "react";

export const TopSection = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopSectionStyled>{children}</TopSectionStyled>
    </>
  );
};
