import styled from "styled-components";

export const LeftSideStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  z-index: 1;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 600px) {
  }
`;

export const LeftSideBackgroundTop = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-image: url("../../../../images/pattern-quotes.svg"); */
  background-size: cover;
  background-position: center;
  z-index: -1;
  margin-top: 525px;
  margin-left: 350px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;

export const LeftSideBackgroundBottom = styled.div`
  display: flex;
  position: absolute;
  width: auto;
  height: auto;
  background-size: cover;
  background-position: bottom;
  z-index: -1;
  bottom: 0;

  @media (max-width: 1024px) {
    width: 100%;
    bottom: 0;
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
  margin-right: -30px;
  z-index: 1;
  line-height: 1.5;

  @media (max-width: 1024px) {
    display: flex;
    width: 80%;
    text-align: center;
    margin: 0;
    line-height: 1.5;
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
  z-index: 1;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 0;
    margin-top: 30px;
  }

  @media (max-width: 600px) {
  }
`;

export const LeftSidePersonTextName = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: var(--primary-dark-blue);
  z-index: 1;

  @media (max-width: 1024px) {
    width: auto;
    margin: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const LeftSidePersonTextProfession = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary-grayish-blue);
  z-index: 1;

  @media (max-width: 1024px) {
    width: auto;
    margin: auto;
  }

  @media (max-width: 600px) {
  }
`;
