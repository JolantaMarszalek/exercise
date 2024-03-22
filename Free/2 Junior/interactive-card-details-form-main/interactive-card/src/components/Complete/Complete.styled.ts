import styled from "styled-components";

export const CompleteSection = styled.section`
  display: flex;
  /* flex-direction: column; */
  height: 100%;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
  position: static;
  z-index: -1;

  @media (max-width: 1024px) {
  }
`;

export const CompleteSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  gap: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CompleteSectionCardImage = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CompleteSectionCardTop = styled.div`
  display: flex;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CompleteSectionCardBottom = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CompleteSectionCardButton = styled.button`
  display: flex;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: 1px;
  font-weight: 500;
  color: var(--neutral-white);
  background-color: var(--neutral-very-dark-violet);
  border: 1px solid var(--neutral-very-dark-violet);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
