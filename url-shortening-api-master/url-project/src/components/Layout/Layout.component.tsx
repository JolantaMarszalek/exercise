import { ReactNode } from "react";
import { Main } from "./Layout.styled";
import { Header } from "../Header/Header.component";
import { Footer } from "../Footer/Footer.component";
import React from "react";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Header /> */}
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
