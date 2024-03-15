import styled from "styled-components";

export const MiddleSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
  }
`;

export const MiddleSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "DM Serif Display", serif;
  padding-left: 200px;
  padding-right: 200px;
  font-size: 50px;
  color: var(--primary-dark-violet);

  @media (max-width: 1024px) {
  }
`;

export const MiddleSectionBottom = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding-left: 200px;
  padding-right: 200px;
  gap: 50px;

  @media (max-width: 1024px) {
  }
`;

export const MiddleSectionBottomSingle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
  }
`;

export const MiddleSectionBottomSingleImage = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
  }
`;

export const MiddleSectionBottomSingleTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "DM Serif Display", serif;
  font-size: 30px;
  color: var(--primary-dark-violet);

  @media (max-width: 1024px) {
  }
`;

export const MiddleSectionBottomSingleDescribe = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Karla", sans-serif;
  font-size: 20px;
  color: var(--neutral-dark-grayish-violet);

  @media (max-width: 1024px) {
  }
`;
