import styled from "styled-components";

export const SectionFirstSection = styled.section`
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

export const SectionFirstLeftSection = styled.div`
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

export const SectionFirstLeftSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  font-size: 55px;
  font-weight: bold;
  color: var(--neutral-dark-slate-grey);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const SectionFirstLeftSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: var(--neutral-dark-slate-grey);
  line-height: 1.5;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const SectionFirstLeftSectionButton = styled.div`
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

export const SectionFirstRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 700px;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2px;

  @media (max-width: 1024px) {
    display: none;
    flex-direction: column;
  }
`;