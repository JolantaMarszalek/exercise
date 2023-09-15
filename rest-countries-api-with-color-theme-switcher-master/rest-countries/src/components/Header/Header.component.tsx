import { Link } from "react-router-dom";
import Toggle from "../Toggle/Toggle.component";
import { Title } from "./Header.styled";

const Header = () => {
  return (
    <>
      <Title>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {" "}
          Where in the world?
        </Link>
      </Title>
      <Toggle />
    </>
  );
};

export default Header;
