import styled from "styled-components";

export const CardBackContainer = styled.section`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 9999;
  /* position: absolute; */
  background-color: hsla(0, 0%, 0%, 0.75);
  position: fixed;
  width: 100%;
  /* height: 100%; */
  height: 100vh;
  overflow-y: auto;
`;

export const CardBackSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: auto;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid lightgray;
  background-color: white;
  overflow-y: auto;
  padding: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 20px;
  font-weight: bold;
  width: 90%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--neutral-dark-gray);
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid var(--neutral-dark-gray);
  border-radius: 10px;
  width: 90%;
  height: 200px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;
export const CardBackSectionCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  width: 90%;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardTopLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  width: auto;
  gap: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardTopRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  width: auto;
  gap: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 15px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardTopPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-moderate-cyan);

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: var(--neutral-dark-gray);
  width: 90%;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 20px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: bold;
  font-size: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CloseButton = styled.button`
  /* position: absolute; */
  /* top: 10px; */
  /* right: 10px; */
  display: flex;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  width: 30px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: black;
  z-index: 999;
`;
