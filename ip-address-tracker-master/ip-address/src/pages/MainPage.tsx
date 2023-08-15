import Header from "../components/Header/Header.component";
// import { Title } from "../components/Header/Header.styled";
import { SearchBar } from "../components/SearchBar/SearchBar.component";

export const MainPage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <p>IP addres | location | timezone | ISP</p>
    </>
  );
};
