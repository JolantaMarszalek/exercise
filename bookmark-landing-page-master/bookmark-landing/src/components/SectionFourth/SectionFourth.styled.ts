import styled from "styled-components";

export const SectionFourthTopSection = styled.section`
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

export const SectionFourthTopSectionTitle = styled.div`
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
    text-align: center;
    width: 550px;
  }
`;

export const SectionFourthTopSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: var(--neutral-grayish-blue);
  line-height: 1.5;
  width: 550px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    text-align: center;
    width: 550px;
  }
`;

export const SectionFourthSection = styled.section`
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

export const SectionFourthList = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: var(--neutral-dark-slate-grey);
  width: 550px;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid var(--neutral-grayish-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    text-align: center;
    width: 550px;
  }
`;

export const SectionFourthListSingleLine = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-between;
  /* gap: 15px; */
  height: 50px;
  margin-top: 5px;
  margin-bottom: 5px;

  border-bottom: 1px solid var(--neutral-grayish-blue);

  @media (max-width: 1024px) {
    display: flex;
    margin-top: 10px;
    text-align: center;
    width: 550px;
  }
`;

export const SectionFourthListSingleLineImage = styled.div`
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
export const SectionFourthListSingleLineQuestion = styled.div`
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
export const SectionFourthListSingleLineAnswear = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  margin-top: 5px;
  margin-bottom: 5px;
  color: var(--neutral-grayish-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SectionFourthSectionButton = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0;
  }
`;
