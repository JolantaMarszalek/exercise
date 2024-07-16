import {
  MainCard,
  MainCardLineNarrow,
  MainCardLineWide,
  MainCardTitle,
  MainStyled,
} from "./Main.styled";

export const Main = () => {
  return (
    <MainStyled>
      <MainCard>
        <MainCardTitle>Contact us</MainCardTitle>
        <MainCardLineNarrow></MainCardLineNarrow>
        <MainCardLineNarrow></MainCardLineNarrow>
        <MainCardLineNarrow></MainCardLineNarrow>
        <MainCardLineWide></MainCardLineWide>
      </MainCard>
    </MainStyled>
  );
};
