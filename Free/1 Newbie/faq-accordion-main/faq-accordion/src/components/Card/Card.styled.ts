import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  background-color: var(--white);
  margin-top: -200px;
  z-index: 9999;
  border-radius: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightTitle = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  padding: 2px;
  font-size: 20px;
  color: var(--very-dark-grayish-blue);
  font-weight: bold;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightTitleImage = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  padding: 2px;
  font-size: 20px;
  color: var(--very-dark-grayish-blue);
  font-weight: bold;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightSingleLine = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 90%;
  padding: 2px;
  color: var(--desaturated-dark-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightSingleLineQuestion = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 2px;
  color: var(--desaturated-dark-blue);
  font-weight: bold;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightSingleLineQuestionImage = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: auto;
  padding: 2px;
  color: var(--desaturated-dark-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightSingleLineAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 90%;
  padding: 2px;
  color: var(--desaturated-dark-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;
