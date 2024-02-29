import { ReactNode } from "react";
import { FooterSection } from "./Footer.styled";

export const Footer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <FooterSection>{children}</FooterSection>
    </>
  );
};
