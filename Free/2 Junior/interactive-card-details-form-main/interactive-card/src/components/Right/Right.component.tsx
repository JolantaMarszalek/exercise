import { useState } from "react";
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
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardError, setCreditCardError] = useState("");

  const handleCreditCardNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const containsLetter = /[a-zA-Z]/.test(value);
    if (!containsLetter) {
      const newValue = value.replace(/[^\d]/g, "");
      setCreditCardNumber(newValue);
      if (newValue.length !== 16) {
        setCreditCardError("Wrong format, 16 numbers required");
      } else {
        setCreditCardError("");
      }
    } else {
      setCreditCardError("Wrong format, numbers only");
    }
  };

  return (
    <RightSection>
      <RightSectionCard>
        <RightSectionCardForm>
          <RightSectionCardText>Cardholder Name</RightSectionCardText>
          <RightSectionCardInput placeholder="e.g. Jane Appleseed"></RightSectionCardInput>
          <RightSectionCardText>Card Number</RightSectionCardText>
          <RightSectionCardInput
            type="text"
            value={creditCardNumber}
            onChange={handleCreditCardNumberChange}
            placeholder="e.g. 1234 5678 9123 0000"></RightSectionCardInput>
          {creditCardError && (
            <span style={{ color: "red" }}>{creditCardError}</span>
          )}
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
