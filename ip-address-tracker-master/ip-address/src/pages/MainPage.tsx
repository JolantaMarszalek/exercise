import Header from "../components/Header/Header.component";
import Map from "../components/Map/Map.component";
import MiddleData from "../components/MiddleData/MiddleData.component";
// import { Title } from "../components/Header/Header.styled";
// import { SearchBar } from "../components/SearchBar/SearchBar.component";

export const MainPage = () => {
  return (
    <>
      <Header />
      {/* <SearchBar /> */}
      <MiddleData />
      <Map />
    </>
  );
};
