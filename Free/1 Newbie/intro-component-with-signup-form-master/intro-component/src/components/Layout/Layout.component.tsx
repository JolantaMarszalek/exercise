import { BackgroundImg, LayoutSection } from "./Layout.styled";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutSection>
        <BackgroundImg src="../../../../images/bg-intro-desktop.png" />
        {children}
      </LayoutSection>
    </>
  );
};
