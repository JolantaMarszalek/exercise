import styled from "styled-components";

export const CardSection = styled.section`
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
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

export const CardLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 400px;
  height: 550px;
  background: var(--neutral-white);
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 375px;
  }
`;

export const CardLeftSectionTitle = styled.div`
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

export const CardLeftSectionDescribe = styled.div`
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

export const CardLeftSectionList = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: var(--neutral-dark-slate-grey);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const CardLeftSectionListSingleLine = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 15px;

  @media (max-width: 1024px) {
    display: flex;
    margin-top: 10px;
  }
`;

export const CardLeftSectionListSingleLineImage = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardLeftSectionListSingleLineDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  margin-top: 5px;
  margin-bottom: 5px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardLeftSectionInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: stretch;

  @media (max-width: 1024px) {
    margin-top: 30px;
  }
`;

export const CardLeftSectionAboveInput = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: bold;
  color: var(--neutral-dark-slate-grey);
`;

export const ErrorContainer = styled.div`
  color: var(--primary-tomato);
  text-align: right;
  font-size: 12px;
  font-weight: bold;
  .input-error {
    border: 1px solid red;
  }
`;

export const CardRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 400px;
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2px;

  @media (max-width: 1024px) {
    display: none;
    flex-direction: column;
  }
`;
