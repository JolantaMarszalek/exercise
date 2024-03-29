import styled from "styled-components";

export const SectionSecondTopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  width: 80%;
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

export const SectionSecondTopSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  font-size: 35px;
  font-weight: bold;
  height: 100px;
  color: var(--neutral-very-dark-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const SectionSecondTopSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: var(--neutral-grayish-blue);
  line-height: 1.5;
  width: 550px;
  text-align: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const SectionSecondTopMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
  color: var(--neutral-grayish-blue);
  line-height: 1.5;
  height: 100px;
  width: 900px;
  text-align: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: auto;
    /* margin-top: 30px; */
    margin-bottom: 30px;
  }
`;

export const SectionSecondTopMenuSingle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: var(--neutral-grayish-blue);
  line-height: 1.5;
  width: 300px;
  height: 50px;
  text-align: center;
  border-bottom: 1px solid var(--neutral-grayish-blue);
  transition: border-color 0.3s;

  &:hover {
    color: var(--primary-soft-red);
    border-bottom: 4px solid var(--primary-soft-red);
  }

  &:active {
    border-bottom: 4px solid var(--primary-soft-red);
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: auto;
  }
`;

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
    margin-top: 30px;
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
    margin-top: 30px;
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
  }
`;
