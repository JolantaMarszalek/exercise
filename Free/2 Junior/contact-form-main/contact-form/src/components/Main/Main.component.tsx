import {
  MainCard,
  MainCardInputM,
  MainCardInputS,
  MainCardLineNarrow,
  MainCardLineNarrowS,
  MainCardLineWide,
  MainCardTitle,
  MainStyled,
} from "./Main.styled";

export const Main = () => {
  return (
    <MainStyled>
      <MainCard>
        <MainCardTitle>Contact us</MainCardTitle>
        <MainCardLineNarrow>
          <MainCardLineNarrowS>
            <MainCardInputS></MainCardInputS>
          </MainCardLineNarrowS>
          <MainCardLineNarrowS>
            <MainCardInputS></MainCardInputS>
          </MainCardLineNarrowS>
        </MainCardLineNarrow>
        <MainCardLineNarrow>
          <MainCardInputM></MainCardInputM>
        </MainCardLineNarrow>
        <MainCardLineNarrow>
          <MainCardLineNarrowS>
            <MainCardInputS></MainCardInputS>
          </MainCardLineNarrowS>
          <MainCardLineNarrowS>
            <MainCardInputS></MainCardInputS>
          </MainCardLineNarrowS>
        </MainCardLineNarrow>

        <MainCardLineWide></MainCardLineWide>
      </MainCard>
    </MainStyled>
  );
};
