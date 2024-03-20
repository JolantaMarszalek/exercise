import styled from "styled-components";

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
  }
`;

export const RightSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
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
  }
`;

export const RightSectionCardInputDate = styled.input`
  display: flex;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-family: "Space Grotesk", sans-serif;
  padding-left: 20px;
  width: 60px;
  letter-spacing: 1px;
  border: 1px solid var(--neutral-light-grayish-violet);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
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
    flex-direction: column;
  }
`;

export const RightSectionCardSmallerSection = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RightSectionCardDateSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RightSectionCardDateSectionInputs = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RightSectionCardCVCSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
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

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
