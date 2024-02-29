import { BottomSectionStyled } from "./BottomSection.styled";

import { ReactNode } from "react";

export const BottomSection = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BottomSectionStyled>{children}</BottomSectionStyled>
    </>
  );
};
