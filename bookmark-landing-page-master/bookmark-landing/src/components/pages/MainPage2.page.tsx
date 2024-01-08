// import { ReactNode } from "react";
import { Header } from "../Header/Header.component";
import { Layout } from "../Layout/Layout.component";
import { SectionFirst } from "../SectionFirst/SectionFirst.component";
import { SectionSecond } from "../SectionSecond/SectionSecond.component";
import { SectionSecondTab2 } from "../SectionSecondTab2/SectionSecondTab2.component";

// interface MainProps {
//   children: ReactNode;
// }

export const MainPage2 =
  // : React.FC<MainProps>
  () =>
    // { children }
    {
      return (
        <Layout>
          <Header />
          <SectionFirst />
          <SectionSecond />
          <SectionSecondTab2 />
        </Layout>
      );
    };
