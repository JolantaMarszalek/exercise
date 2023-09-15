import { Link } from "react-router-dom";
import Toggle from "../Toggle/Toggle.component";
import { Title } from "./Header.styled";

const Header = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        {" "}
        <Title>Where in the world?</Title>
      </Link>
      <Toggle />
    </>
  );
};

export default Header;
