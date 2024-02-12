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
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

export const CardSecondSectionImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 375px;
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
    width: 375px;
    margin: 0;
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
    width: 375px;
    margin-top: 30px;
  }
`;

export const CardSecondSectionDescribe = styled.div`
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: var(--neutral-dark-slate-grey);
  line-height: 1.5;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    width: 375px;
    margin-top: 30px;
  }
`;
