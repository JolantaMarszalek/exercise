import { Left } from "../Left/Left.component";
import { Right } from "../Right/Right.component";
import { MainSection } from "./Main.styled";

export const Main = () => {
  return (
    <>
      <MainSection>
        <Left></Left>
        <Right></Right>
      </MainSection>
    </>
  );
};