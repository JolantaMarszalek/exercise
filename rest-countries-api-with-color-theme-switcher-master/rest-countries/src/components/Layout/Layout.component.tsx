import { Outlet } from "react-router-dom";
import { Background } from "./Layout.styled";
// import Toggle from "../Toggle/Toggle.component";
import Header from "../Header/Header.component";

const Layout = () => {
  return (
    <>
      <Background>
        <Header />
        <main>
          <Outlet />
        </main>
      </Background>
    </>
  );
};

export default Layout;
