// import React from "react";
import { Footer } from "../Footer/Footer.component";
import { Header } from "../Header/Header.component";
import { Layout } from "../Layout/Layout.component";
import { SectionFifth } from "../SectionFifth/SectionFifth.component";
import { SectionFirst } from "../SectionFirst/SectionFirst.component";
import { SectionFourth } from "../SectionFourth/SectionFourth.component";
import { SectionSecond } from "../SectionSecond/SectionSecond.component";
import { SectionSecondTab1 } from "../SectionSecondTab1/SectionSecondTab1.component";
import { SectionThird } from "../SectionThird/SectionThird.component";

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
          <SectionThird />
          <SectionFourth />
          <SectionFifth />
          <Footer />
        </Layout>
      );
    };
