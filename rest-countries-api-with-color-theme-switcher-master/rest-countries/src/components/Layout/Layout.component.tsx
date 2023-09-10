import { Outlet } from "react-router-dom";
import { Background } from "./Layout.styled";
import Toggle from "../Toggle/Toggle.component";

const Layout = () => {
  return (
    <>
      <Background />
      <h1>Where in the world?</h1>
      <Toggle />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
