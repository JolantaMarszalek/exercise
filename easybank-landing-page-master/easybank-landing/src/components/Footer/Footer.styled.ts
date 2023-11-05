import styled from "styled-components";

export const FooterSectionStyle = styled.footer`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  height: 200px;
  background-color: var(--primary-dark-blue);
  color: var(--neutral-white);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.5rem;
    gap: 0px;
    height: 100%;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.5rem;
    gap: 0px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    gap: 0px;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    gap: 0px;
  }

  @media (max-width: 375px) {
    font-size: 0.5rem;
    align-items: center;
    width: 100%;
  }
`;

export const FooterSectionLogo = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  justify-content: center;
  /* align-items: center; */

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
    /* font-size: 0.5rem; */
    align-items: center;
    width: 100%;
    gap: 20px;
  }
`;

export const FooterSectionLink = styled.div`
  position: static;
  justify-content: center;
  flex-direction: column;
  display: flex;
  gap: 20px;
  margin: 10px;
  width: 400px;
  font-size: 15px;
  color: var(--neutral-white);

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
    /* font-size: 0.5rem; */
    align-items: center;
    width: 100%;
    gap: 20px;
  }
`;

export const FooterSectionText = styled.div`
  width: min(30rem, 100%);
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 50px;
  } */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 20px; */
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 20px; */
  }

  @media (max-width: 375px) {
    /* font-size: 0.5rem; */
    align-items: center;
    width: 100%;
    gap: 20px;
  }
`;

export const FooterSectionTextUnderButton = styled.div`
  width: min(30rem, 100%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;
  font-size: 15px;
  color: var(--neutral-grayish-blue);

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const FooterSectionButton = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  margin: 10px;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const FooterSectionImages = styled.div`
  position: static;
  display: flex;
  margin-right: 100px;
  margin-top: 50px;
  color: white;

  @media (max-width: 768px) {
    /* display: flex;
    flex-direction: column; */
    justify-content: center;
    align-items: center;
    /* gap: 20px; */
  }

  @media (max-width: 576px) {
    /* display: flex;
    flex-direction: column; */
    justify-content: center;
    align-items: center;
    /* gap: 20px; */
  }

  @media (max-width: 375px) {
    /* font-size: 0.5rem; */
    align-items: center;
    width: 100%;
    /* gap: 20px; */
  }
`;

export const FooterSectionSingleImage = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;
