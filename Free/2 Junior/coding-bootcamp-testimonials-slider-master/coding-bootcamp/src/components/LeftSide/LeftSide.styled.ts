import styled from "styled-components";

export const LeftSideStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;

export const LeftSideQuoteText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  color: var(--primary-dark-blue);
  margin-top: 25px;
  margin-bottom: 25px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;

export const LeftSidePersonText = styled.div`
  display: flex;
  margin-left: 250px;
  gap: 20px;
  margin-top: 25px;
  margin-bottom: 25px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;

export const LeftSidePersonTextName = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: var(--primary-dark-blue);

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;

export const LeftSidePersonTextProfession = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary-grayish-blue);

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;
