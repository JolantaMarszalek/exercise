import { LayoutSectionStyle } from "./Layout.styled";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <LayoutSectionStyle>{children}</LayoutSectionStyle>
    </>
  );
};
