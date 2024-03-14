import styled from "styled-components";

export const TopSection = styled.section`
  display: flex;
  /* flex-direction: column; */
  background-color: var(--primary-dark-violet);
  @media (max-width: 1024px) {
  }
`;

export const TopSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--neutral-very-light-gray);
  padding-left: 100px;
  width: 50%;
  justify-content: center;
  gap: 25px;

  @media (max-width: 1024px) {
  }
`;

export const TopSectionLeftText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  padding-right: 100px;
  gap: 25px;

  @media (max-width: 1024px) {
  }
`;

export const TopSectionLeftTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 50px;
  font-family: "DM Serif Display", serif;

  @media (max-width: 1024px) {
  }
`;

export const TopSectionLeftDescribe = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-family: "Karla", sans-serif;

  @media (max-width: 1024px) {
  }
`;

export const TopSectionLeftButton = styled.button`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  height: 40px;
  width: 150px;
  justify-content: center;
  background-color: var(--primary-dark-violet);
  align-items: center;
  color: var(--neutral-very-light-gray);
  border: 2px solid var(--neutral-very-light-gray);
  font-weight: 700;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
  }
`;

export const TopSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 100px;
  width: 50%;
  height: auto;
  align-items: center;

  @media (max-width: 1024px) {
  }
`;

export const TopSectionRightImage = styled.img`
  display: flex;
  flex-direction: column;
  /* padding-right: 100px; */
  width: 70%;
  height: auto;
  padding-left: 100px;
  padding-right: 100px;

  @media (max-width: 1024px) {
  }
`;
