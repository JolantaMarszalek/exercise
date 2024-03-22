import { useState } from "react";
import {
  RightSection,
  RightSectionCard,
  RightSectionCardButton,
  RightSectionCardCVCSection,
  RightSectionCardDateInputsError,
  RightSectionCardDateSection,
  RightSectionCardDateSectionError,
  RightSectionCardDateSectionInputs,
  RightSectionCardForm,
  RightSectionCardInput,
  RightSectionCardInputCVC,
  RightSectionCardInputDate,
  RightSectionCardSmallerSection,
  RightSectionCardText,
} from "./Right.styled";

interface RightProps {
  onFormSubmit: () => void;
}

export const Right: React.FC<RightProps> = ({ onFormSubmit }) => {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardError, setCreditCardError] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [expDateMM, setExpDateMM] = useState("");
  const [expDateYY, setExpDateYY] = useState("");
  const [cvc, setCVC] = useState("");
  const [cvcError, setCVCError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleCardholderNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardholderName(e.target.value);
  };

  const handleExpDateMMChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpDateMM(e.target.value);
  };

  const handleExpDateYYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpDateYY(e.target.value);
  };

  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCVC(e.target.value);
    if (e.target.value.trim() === "") {
      setCVCError("CVC is required");
    } else {
      setCVCError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (
      !cardholderName.trim() ||
      !expDateMM.trim() ||
      !expDateYY.trim() ||
      !cvc.trim() ||
      !creditCardNumber.trim()
    ) {
      // alert("Can't be blank");
      return;
    }
    onFormSubmit();
  };

  return (
    <RightSection>
      <RightSectionCard>
        <RightSectionCardForm onSubmit={handleSubmit}>
          <RightSectionCardText>Cardholder Name</RightSectionCardText>
          <RightSectionCardInput
            placeholder="e.g. Jane Appleseed"
            value={cardholderName}
            onChange={handleCardholderNameChange}></RightSectionCardInput>
          {!cardholderName.trim() && formSubmitted && (
            <RightSectionCardDateInputsError style={{ color: "red" }}>
              Name is required
            </RightSectionCardDateInputsError>
          )}
          <RightSectionCardText>Card Number</RightSectionCardText>
          <RightSectionCardInput
            type="text"
            value={creditCardNumber}
            onChange={handleCreditCardNumberChange}
            placeholder="e.g. 1234 5678 9123 0000"></RightSectionCardInput>
          {(creditCardNumber.trim() === "" || creditCardError) &&
            formSubmitted && (
              <RightSectionCardDateInputsError style={{ color: "red" }}>
                {creditCardError || "Card number is required"}
              </RightSectionCardDateInputsError>
            )}
          <RightSectionCardSmallerSection>
            <RightSectionCardDateSection>
              <RightSectionCardText>Exp. Date (MM/YY)</RightSectionCardText>
              <RightSectionCardDateSectionInputs>
                <RightSectionCardDateSectionError>
                  {" "}
                  <RightSectionCardInputDate
                    placeholder="MM"
                    value={expDateMM}
                    onChange={
                      handleExpDateMMChange
                    }></RightSectionCardInputDate>
                  {!expDateMM.trim() && formSubmitted && (
                    <RightSectionCardDateInputsError style={{ color: "red" }}>
                      Can't be blank
                    </RightSectionCardDateInputsError>
                  )}
                </RightSectionCardDateSectionError>
                <RightSectionCardDateSectionError>
                  {" "}
                  <RightSectionCardInputDate
                    placeholder="YY"
                    value={expDateYY}
                    onChange={
                      handleExpDateYYChange
                    }></RightSectionCardInputDate>
                  {!expDateYY.trim() && formSubmitted && (
                    <RightSectionCardDateInputsError style={{ color: "red" }}>
                      Can't be blank
                    </RightSectionCardDateInputsError>
                  )}{" "}
                </RightSectionCardDateSectionError>
              </RightSectionCardDateSectionInputs>
              <RightSectionCardText></RightSectionCardText>
            </RightSectionCardDateSection>
            <RightSectionCardCVCSection>
              <RightSectionCardText>CVC</RightSectionCardText>
              <RightSectionCardInputCVC
                placeholder="e.g. 123"
                value={cvc}
                onChange={handleCVCChange}></RightSectionCardInputCVC>
              {cvc.trim() === "" && formSubmitted && (
                <RightSectionCardDateInputsError style={{ color: "red" }}>
                  CVC is required
                </RightSectionCardDateInputsError>
              )}{" "}
            </RightSectionCardCVCSection>
          </RightSectionCardSmallerSection>
          <RightSectionCardButton type="submit">Confirm</RightSectionCardButton>
        </RightSectionCardForm>
      </RightSectionCard>
    </RightSection>
  );
};
