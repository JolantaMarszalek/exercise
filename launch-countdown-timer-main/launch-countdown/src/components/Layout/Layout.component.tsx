// import { GlobalStyle } from "../../theme/globalStyles";
import { LayoutSection } from "./Layout.styled";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <LayoutSection>{children}</LayoutSection>
    </>
  );
};
