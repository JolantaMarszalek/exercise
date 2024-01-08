import styled from "styled-components";

export const SectionSecondSection = styled.section`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: var(--neutral-white);
  padding: 2px;
  border-radius: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

export const SectionSecondLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 700px;
  height: 100%;
  background: var(--neutral-white);
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 375px;
  }
`;

export const SectionSecondRightSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  font-size: 35px;
  font-weight: bold;
  color: var(--neutral-very-dark-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const SectionSecondRightSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: var(--neutral-grayish-blue);
  line-height: 1.5;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const SectionSecondRightSectionButton = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  gap: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0;
  }
`;

export const SectionSecondRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 700px;
  height: 100%;
  background: var(--neutral-white);
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 375px;
  }
`;
