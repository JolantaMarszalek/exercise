// import { ReactNode } from "react";
import { Header } from "../Header/Header.component";
import { Layout } from "../Layout/Layout.component";
import { SectionFirst } from "../SectionFirst/SectionFirst.component";
import { SectionSecond } from "../SectionSecond/SectionSecond.component";
import { SectionSecondTab3 } from "../SectionSecondTab3/SectionSecondTab3.component";

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
        </Layout>
      );
    };
