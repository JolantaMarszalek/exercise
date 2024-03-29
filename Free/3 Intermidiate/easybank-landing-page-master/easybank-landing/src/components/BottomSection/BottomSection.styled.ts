import styled from "styled-components";

export const BottomSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  background-color: var(--neutral-very-light-gray);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
    gap: 20px;
  }
`;

export const BottomSectionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const BottomSectionTitle = styled.div`
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

export const BottomCardSection = styled.section`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
  gap: 3rem;
  padding: 8rem 0;
  border-radius: 10px;
  padding: 0.5rem;
  height: auto;
`;

export const BottomCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  border-radius: 10px;
  transition: 0.2s linear;
  border: none;
  padding: 20px;
  gap: 20px;

  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 6vh;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
    gap: 20px;
  }
`;

export const BottomCardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: nowrap;
  width: 350px;
  min-height: 400px;
  border-radius: 6px;
  padding: 0.5rem;
  margin-bottom: 100px;
  transition: 0.2s linear;
  border: none;
  background-color: var(--neutral-white);

  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const BottomCardImage = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--neutral-white);

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const BottomCardAuthor = styled.div`
  gap: 1.2rem;
  margin: 10px;
  margin-left: 20px;
  font-size: 13px;
  justify-content: center;
  background-color: var(--neutral-white);
  color: var(--neutral-grayish-blue);

  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const BottomCardTitle = styled.div`
  gap: 1.2rem;
  margin: 10px;
  margin-left: 20px;
  font-size: 18px;
  justify-content: center;
  background-color: var(--neutral-white);
  color: var(--primary-dark-blue);

  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const BottomCardDescribe = styled.div`
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
  background-color: var(--neutral-white);
  color: var(--neutral-grayish-blue);

  @media (max-width: 650px) {
    font-size: 14px;
  }
`;
