import { LayoutStyled } from "./Layout.styled";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutStyled> {children}</LayoutStyled>;
};
