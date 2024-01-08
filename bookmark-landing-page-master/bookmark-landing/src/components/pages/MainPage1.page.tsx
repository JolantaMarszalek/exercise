// import React from "react";
import { Header } from "../Header/Header.component";
import { Layout } from "../Layout/Layout.component";
import { SectionFirst } from "../SectionFirst/SectionFirst.component";
import { SectionSecond } from "../SectionSecond/SectionSecond.component";
import { SectionSecondTab1 } from "../SectionSecondTab1/SectionSecondTab1.component";

// interface MainProps {
//   children: React.ReactNode;
// }

export const MainPage1 =
  // : React.FC<MainProps>
  () =>
    // { children }
    {
      return (
        <Layout>
          <Header />
          <SectionFirst />
          <SectionSecond />
          <SectionSecondTab1 />
        </Layout>
      );
    };
