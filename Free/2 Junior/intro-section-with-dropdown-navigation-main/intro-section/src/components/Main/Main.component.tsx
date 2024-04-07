import { Left } from "../Left/Left.component";
import { Right } from "../Right/Right.component";
import { MainSection, MainSectionCard } from "./Main.styled";

export const Main = () => {
  return (
    <>
      <MainSection>
        <MainSectionCard>
          <Left></Left>
          <Right></Right>
        </MainSectionCard>
      </MainSection>
    </>
  );
};
