import styled from "styled-components";

export const MiddleSectionStyled = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 15vh;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const MiddleSectionText = styled.div`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const MiddleSectionTitle = styled.div`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const MiddleSectionDescribe = styled.div`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  color: hsl(240, 1%, 63%);
  font-weight: bold;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const MiddleSectionImage = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 10px;
    img {
      width: auto;
      height: 100%;
    }
  }
`;
