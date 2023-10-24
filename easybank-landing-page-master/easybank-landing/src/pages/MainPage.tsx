import { Header } from "../components/Header/Header.component";
import { Footer } from "../components/Footer/Footer.component";
import { TopSection } from "../components/TopSection/TopSection.component";
import { MiddleSection } from "../components/MiddleSection/MiddleSection.component";
import { BottomSection } from "../components/BottomSection/BottomSection.component";

export const MainPage = () => {
  return (
    <>
      <Header />
      <TopSection />
      <MiddleSection />
      <BottomSection />
      <Footer />
    </>
  );
};
