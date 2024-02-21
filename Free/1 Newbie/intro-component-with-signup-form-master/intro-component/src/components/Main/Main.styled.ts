import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 400px;
  background-color: green;

  z-index: 9999;
  border-radius: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    /* width: auto; */
  }

  @media (max-width: 375px) {
    padding: 2px;
    width: 80%;
  }
`;

export const MainSectionLeft = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  padding: 2px;
  font-size: 50px;
  color: var(--dark-purple);
  font-weight: bold;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRight = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  padding: 2px;
  font-size: 50px;
  color: var(--dark-purple);
  font-weight: bold;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightTop = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  padding: 2px;
  font-size: 50px;
  color: var(--dark-purple);
  font-weight: bold;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightBottom = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  padding: 2px;
  font-size: 50px;
  color: var(--dark-purple);
  font-weight: bold;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightTitle = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  padding: 2px;
  font-size: 50px;
  color: var(--dark-purple);
  font-weight: bold;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightTitleImage = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  padding: 2px;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 1024px) {
    display: flex;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightSingleLine = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 90%;
  padding: 2px;
  border-top: 2px solid var(--light-pink);

  @media (max-width: 1024px) {
    display: flex;
    /* width: auto; */
    align-content: flex-start;
    justify-content: space-evenly;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightSingleLineQuestion = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  /* width: 90%; */
  padding: 2px;
  color: var(--dark-purple);
  font-weight: bold;

  .question {
    cursor: pointer;
  }

  .question:hover {
    color: var(--grayish-purple);
    background-color: #f0f0f0;
  }

  @media (max-width: 1024px) {
    display: flex;
    width: auto;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightSingleLineQuestionImage = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: auto;
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightSingleLineAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 90%;
  padding: 2px;
  color: var(--grayish-purple);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;
