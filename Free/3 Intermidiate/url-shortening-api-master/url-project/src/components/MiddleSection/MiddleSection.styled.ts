import styled from "styled-components";

export const MiddleSectionStyled = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  /* margin-top: 15vh; */
  background: hsl(230, 25%, 95%);

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
  margin: 50px;
  text-align: center;

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
  color: var(--neutral-gray);
  font-weight: bold;
  line-height: 25px;

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

export const MiddleCardTitle = styled.div`
  font-weight: bold;
  gap: 1.2rem;
  margin: 10px;
  font-size: 20px;
  text-align: center;
  justify-content: center;

  @media (max-width: 650px) {
    font-size: 18px;
  }
`;
