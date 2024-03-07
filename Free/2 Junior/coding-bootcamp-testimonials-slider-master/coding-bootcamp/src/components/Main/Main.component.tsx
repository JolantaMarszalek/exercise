import { LeftSide } from "../LeftSide/LeftSide.component";
import { RightSide } from "../RightSide/RightSide.component";
import { MainStyled } from "./Main.styled";

export const Main = () => {
  return (
    <>
      <MainStyled>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </MainStyled>
    </>
  );
};
