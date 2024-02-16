import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  line-height: 1.5;

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
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
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

export const CardSectionRightDescribe = styled.div`
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
