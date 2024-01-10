import styled from "styled-components";

export const CardSection = styled.section`
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  width: 500px;
  background: white;
  z-index: 1;
  /* font-weight: bold; */
  border-radius: 15px;
  background-color: white;
  font-size: 25px;
  margin: 10px;

  @media (max-width: 1024px) {
    font-size: 0.5rem;
    gap: 0px;
    margin: auto;
  }
`;

export const CardSectionTop = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  width: 100%;
  width: 400px;
`;

export const CardSectionMiddle = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  width: 100%;
  width: 400px;
`;

export const CardSectionBottom = styled.div`
  position: static;
  justify-content: space-between;
  display: flex;
  padding: 15px;
  align-items: flex-end;
  width: 100%;
  width: 400px;
  border-top: 2px solid var(--neutral-cream);
`;

export const CardSectionText = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;

export const CardSectionTitle = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  font-weight: bold;
`;

export const CardSectionPrice = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  font-size: 35px;
  font-weight: bold;
`;

export const CardSectionPercent = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  font-size: 15px;
`;

export const CardSectionDescribe = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  color: var(--neutral-medium-brown);
  font-size: 15px;
`;

export const CardSectionLogo = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;
