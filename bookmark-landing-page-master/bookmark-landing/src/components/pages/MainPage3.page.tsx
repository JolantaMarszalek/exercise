// import { ReactNode } from "react";
import { Footer } from "../Footer/Footer.component";
import { Header } from "../Header/Header.component";
import { Layout } from "../Layout/Layout.component";
import { SectionFifth } from "../SectionFifth/SectionFifth.component";
import { SectionFirst } from "../SectionFirst/SectionFirst.component";
import { SectionFourth } from "../SectionFourth/SectionFourth.component";
import { SectionSecond } from "../SectionSecond/SectionSecond.component";
import { SectionSecondTab3 } from "../SectionSecondTab3/SectionSecondTab3.component";
import { SectionThird } from "../SectionThird/SectionThird.component";

// interface MainProps {
//   children: ReactNode;
// }

export const MainPage3 =
  // : React.FC<MainProps>
  () =>
    // { children }
    {
      return (
        <Layout>
          <Header />
          <SectionFirst />
          <SectionSecond />
          <SectionSecondTab3 />
          <SectionThird />
          <SectionFourth />
          <SectionFifth />
          <Footer />
        </Layout>
      );
    };
