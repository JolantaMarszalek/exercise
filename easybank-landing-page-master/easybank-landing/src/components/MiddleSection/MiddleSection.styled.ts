import styled from "styled-components";

export const MiddleSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  background-color: var(--neutral-light-grayish-blue);

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const MiddleSectionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;
  background-color: var(--neutral-light-grayish-blue);

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const MiddleSectionTitle = styled.div`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  font-size: 50px;
  color: var(--primary-dark-blue);

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const MiddleSectionDescribe = styled.div`
  width: min(60rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  background-color: var(--neutral-light-grayish-blue);
  color: var(--neutral-grayish-blue);
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 50px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const MiddleCardSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 8rem 0;
  border-radius: 10px;
  padding: 0.5rem;
  margin-bottom: 100px;
  background-color: var(--neutral-light-grayish-blue);
`;

export const MiddleCardContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40vh;
  width: 80vw;
  border-radius: 10px;
  transition: 0.2s linear;
  border: none;
  background-color: var(--neutral-light-grayish-blue);

  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 6vh;
  }
`;

export const MiddleCardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: nowrap;
  width: 350px;
  height: auto;
  border-radius: 6px;
  padding: 0.5rem;
  margin: auto;
  transition: 0.2s linear;
  border: none;
  background-color: var(--neutral-light-grayish-blue);
  color: black;

  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const MiddleCardImage = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--neutral-light-grayish-blue);
  border-radius: 50%;

  @media (max-width: 1024px) {
    flex-direction: column;

    img {
      width: auto;
      height: 100%;
    }
  }
`;

export const MiddleCardTitle = styled.div`
  gap: 1.2rem;
  margin: 10px;
  margin-left: 20px;
  font-size: 20px;
  justify-content: center;
  background-color: var(--neutral-light-grayish-blue);
  color: var(--primary-dark-blue);

  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const MiddleCardDescribe = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 15px;
  line-height: 25px;
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  word-break: break-word;
  word-wrap: break-word;
  max-width: auto;
  background-color: var(--neutral-light-grayish-blue);
  color: var(--neutral-grayish-blue);

  @media (max-width: 650px) {
    font-size: 14px;
  }
`;
