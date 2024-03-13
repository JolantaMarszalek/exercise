import styled from "styled-components";

export const MiddleSectionStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  background-color: var(--primary-dark-blue--main-background);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  justify-items: center;

  @media (max-width: 1024px) {
    margin: auto;
    display: flex;
    flex-direction: column;
  }
`;

export const MiddleSectionStyledSingle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;
  height: auto;

  @media (max-width: 1024px) {
    margin: auto;
  }
`;

export const MiddleSectionText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--neutral-white);
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
  z-index: 1;
  height: auto;
  justify-content: center;
`;

export const MiddleSectionTextTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  gap: 20px;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  z-index: 1;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const MiddleSectionTextDescribe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  z-index: 1;
  margin-top: 5px;
  margin-bottom: 5px;
`;
