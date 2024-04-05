import styled from "styled-components";

export const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftSectionCardTitle = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftSectionCardDescribe = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftSectionCardButton = styled.button`
  height: 45px;
  width: 130px;
  background-color: var(--neutral-almost-white);
  color: var(--neutral-medium-gray);
  border-radius: 15px;
  border: 2px solid var(--neutral-medium-gray);
  /* font-weight: bold; */
  z-index: 1;
  font-family: "Epilogue", sans-serif;
  font-size: 18px;
  /* margin-top: -10px; */
  font-weight: 500;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const LeftSectionCardImages = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftSectionCardSingleImage = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
