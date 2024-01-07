import { ReactNode } from "react";
import { Header } from "../Header/Header.component";
import { Layout } from "../Layout/Layout.component";
import { SectionFirst } from "../SectionFirst/SectionFirst.component";
import { SectionSecond } from "../SectionSecond/SectionSecond.component";

interface MainProps {
  children: ReactNode;
}

export const MainPage: React.FC<MainProps> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <SectionFirst>{children}</SectionFirst>
      <SectionSecond>{children}</SectionSecond>
    </Layout>
  );
};
