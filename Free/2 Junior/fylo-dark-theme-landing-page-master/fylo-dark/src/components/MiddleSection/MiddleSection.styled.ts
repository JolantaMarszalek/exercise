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

export const MiddleSectionImage = styled.img`
  display: flex;
  flex-direction: column;
  position: static;
  margin: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MiddleSectionText = styled.div`
  display: flex;
  flex-direction: column;
  /* position: static; */
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
  /* position: static; */
  gap: 20px;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  z-index: 1;
  /* width: 50%; */
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const MiddleSectionTextDescribe = styled.div`
  display: flex;
  flex-direction: column;
  /* position: static; */
  gap: 20px;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  z-index: 1;
  /* width: 40%; */
  margin-top: 15px;
  margin-bottom: 15px;
`;
