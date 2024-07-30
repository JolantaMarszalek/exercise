import {
  Button,
  MainCard,
  MainCardButton,
  MainCardInputL,
  MainCardInputM,
  MainCardInputS,
  MainCardLineNarrow,
  MainCardLineNarrowS,
  MainCardLineText,
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
            <MainCardLineText>First Name *</MainCardLineText>
            <MainCardInputS></MainCardInputS>
          </MainCardLineNarrowS>
          <MainCardLineNarrowS>
            <MainCardLineText>Last Name *</MainCardLineText>
            <MainCardInputS></MainCardInputS>
          </MainCardLineNarrowS>
        </MainCardLineNarrow>
        <MainCardLineNarrow>
          <MainCardLineNarrowS>
            <MainCardLineText>Email Address *</MainCardLineText>
            <MainCardInputM></MainCardInputM>
          </MainCardLineNarrowS>
        </MainCardLineNarrow>
        <MainCardLineNarrow>
          <MainCardLineNarrowS>
            <MainCardLineText>Query Type *</MainCardLineText>
            <MainCardInputS></MainCardInputS>
          </MainCardLineNarrowS>
          <MainCardLineNarrowS>
            <MainCardInputS></MainCardInputS>
          </MainCardLineNarrowS>
        </MainCardLineNarrow>
        <MainCardLineWide>
          <MainCardLineText>Message *</MainCardLineText>
          <MainCardInputL></MainCardInputL>
        </MainCardLineWide>
        <MainCardButton>
          <Button>Submit</Button>
        </MainCardButton>
      </MainCard>
    </MainStyled>
  );
};
