import styled from "styled-components";

export const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: auto;
  }
`;

export const LeftSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  margin-left: 150px;
  margin-right: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    align-items: center;
  }
`;

export const LeftSectionCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 90px;
  font-weight: 700;
  margin-right: 150px;
  line-height: 1;
  color: var(--neutral-almost-black);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const LeftSectionCardDescribe = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  font-weight: 500;
  margin-right: 100px;
  line-height: 1.5;
  color: var(--neutral-medium-gray);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    text-align: center;
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const LeftSectionCardButton = styled.button`
  height: 55px;
  width: 180px;
  background-color: var(--neutral-almost-black);
  color: var(--neutral-almost-white);
  border-radius: 15px;
  border: 2px solid var(--neutral-almost-black);
  z-index: 1;
  font-family: "Epilogue", sans-serif;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    font-weight: 700;
    background-color: var(--neutral-almost-white);
    color: var(--neutral-almost-black);
  }

  @media (max-width: 1024px) {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const LeftSectionCardImages = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 100px;

  @media (max-width: 1024px) {
    display: flex;
    /* flex-direction: column; */
    width: 90%;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const LeftSectionCardSingleImage = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    /* flex-direction: column; */
  }
`;
