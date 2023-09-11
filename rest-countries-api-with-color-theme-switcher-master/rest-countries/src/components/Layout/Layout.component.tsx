import { Outlet } from "react-router-dom";
import { Background } from "./Layout.styled";
// import Toggle from "../Toggle/Toggle.component";
import Header from "../Header/Header.component";

const Layout = () => {
  return (
    <>
      <Background />
      {/* <h1>Where in the world?</h1> */}
      <Header />

      {/* <Toggle /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
