import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
  width: 900px;
  height: 650px;
  background: var(--neutral-white);
  padding: 2px;
  border-radius: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 400px;
  height: 600px;
  background: var(--neutral-white);
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 400px;
  height: 600px;
  background: var(--neutral-white);
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;
