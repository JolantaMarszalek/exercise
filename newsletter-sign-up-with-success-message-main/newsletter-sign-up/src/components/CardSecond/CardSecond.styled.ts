import styled from "styled-components";

export const CardSecondSection = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  height: 500px;
  background: var(--neutral-white);
  padding: 2px;
  border-radius: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }
`;

export const CardSecondSectionImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }
`;

export const CardSecondImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  margin-right: 60px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }
`;

export const CardSecondSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  font-size: 55px;
  font-weight: bold;
  color: var(--neutral-dark-slate-grey);
  margin-left: 60px;
  margin-right: 60px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }
`;

export const CardSecondSectionDescribe = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: var(--neutral-dark-slate-grey);
  line-height: 1.5;
  margin-left: 60px;
  margin-right: 60px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }
`;
