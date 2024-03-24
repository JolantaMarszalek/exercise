import styled from "styled-components";

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: auto;
  }
`;

export const RightSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;

export const RightSectionCardForm = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RightSectionCardText = styled.div`
  display: flex;
  text-transform: uppercase;
  padding-top: 20px;
  padding-bottom: 10px;
  letter-spacing: 1px;
  color: var(--neutral-very-dark-violet);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;

export const RightSectionCardInput = styled.input`
  display: flex;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-family: "Space Grotesk", sans-serif;
  padding-left: 20px;
  letter-spacing: 1px;
  border: 1px solid var(--neutral-light-grayish-violet);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: auto;
  }
`;

export const RightSectionCardInputDate = styled.input`
  display: flex;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-family: "Space Grotesk", sans-serif;
  padding-left: 20px;
  width: 80px;
  letter-spacing: 1px;
  border: 1px solid var(--neutral-light-grayish-violet);

  @media (max-width: 1024px) {
    display: flex;
    width: 90%;
  }
`;

export const RightSectionCardInputCVC = styled.input`
  display: flex;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-family: "Space Grotesk", sans-serif;
  padding-left: 20px;
  letter-spacing: 1px;
  border: 1px solid var(--neutral-light-grayish-violet);

  @media (max-width: 1024px) {
    display: flex;
    width: auto;
  }
`;

export const RightSectionCardSmallerSection = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  width: auto;

  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
  }
`;

export const RightSectionCardDateSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    width: 50%;
  }
`;

export const RightSectionCardDateSectionError = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const RightSectionCardDateInputsError = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  padding-top: 5px;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const RightSectionCardDateSectionInputs = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
  }
`;

export const RightSectionCardCVCSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    width: 50%;
  }
`;

export const RightSectionCardButton = styled.button`
  display: flex;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: 1px;
  font-weight: 500;
  color: var(--neutral-white);
  background-color: var(--neutral-very-dark-violet);
  border: 1px solid var(--neutral-very-dark-violet);
  margin-top: 20px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 50px;
  }
`;
