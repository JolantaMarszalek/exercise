import styled from "styled-components";

export const CardThanksContainer = styled.section`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 9999;
  background-color: hsla(0, 0%, 0%, 0.75);
  position: fixed;
  width: 100%;
  height: auto;
  overflow-y: auto;
`;

export const CardThanksSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 600px;
  height: 500px;
  border-radius: 10px;
  margin: 10px;
  background-color: white;
  border: 1px solid lightgray;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardThanksSectionLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardThanksSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  width: 90%;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardThanksSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--neutral-dark-gray);
  width: 90%;
  text-align: center;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardThanksSectionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardThanksSectionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 50px;
  border-radius: 30px;
  font-size: 13px;
  background-color: var(--primary-moderate-cyan);
  color: white;
  border: 0;
  font-weight: bold;

  @media (max-width: 700px) {
    font-size: 11px;
    margin-bottom: 20px;
  }
`;
