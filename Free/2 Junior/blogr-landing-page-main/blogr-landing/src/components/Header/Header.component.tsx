import { HeaderSection } from "./Header.styled";
import { ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderSection>{children}</HeaderSection>
    </>
  );
};
