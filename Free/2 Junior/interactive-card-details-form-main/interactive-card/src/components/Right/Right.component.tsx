import {
  RightSection,
  RightSectionCard,
  RightSectionCardButton,
  RightSectionCardCVCSection,
  RightSectionCardDateSection,
  RightSectionCardDateSectionInputs,
  RightSectionCardForm,
  RightSectionCardInput,
  RightSectionCardInputCVC,
  RightSectionCardInputDate,
  RightSectionCardSmallerSection,
  RightSectionCardText,
} from "./Right.styled";

export const Right = () => {
  return (
    <RightSection>
      <RightSectionCard>
        <RightSectionCardForm>
          <RightSectionCardText>Cardholder Name</RightSectionCardText>
          <RightSectionCardInput placeholder="e.g. Jane Appleseed"></RightSectionCardInput>
          <RightSectionCardText>Card Number</RightSectionCardText>
          <RightSectionCardInput placeholder="e.g. 1234 5678 9123 0000"></RightSectionCardInput>
          <RightSectionCardSmallerSection>
            <RightSectionCardDateSection>
              <RightSectionCardText>Exp. Date (MM/YY)</RightSectionCardText>
              <RightSectionCardDateSectionInputs>
                <RightSectionCardInputDate placeholder="MM"></RightSectionCardInputDate>
                <RightSectionCardInputDate placeholder="YY"></RightSectionCardInputDate>
              </RightSectionCardDateSectionInputs>
              <RightSectionCardText></RightSectionCardText>
            </RightSectionCardDateSection>
            <RightSectionCardCVCSection>
              <RightSectionCardText>CVC</RightSectionCardText>
              <RightSectionCardInputCVC placeholder="e.g. 123"></RightSectionCardInputCVC>
            </RightSectionCardCVCSection>
          </RightSectionCardSmallerSection>
          <RightSectionCardButton>Confirm</RightSectionCardButton>
        </RightSectionCardForm>
      </RightSectionCard>
    </RightSection>
  );
};
