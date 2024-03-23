import styled from "styled-components";

export const LeftSection = styled.section`
  display: flex;
  height: 100%;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
  position: static;
  z-index: -1;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const LeftSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  gap: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

export const LeftSectionCardTop = styled.div`
  display: flex;
  padding-left: 150px;
  position: static;
  z-index: 2;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 80%;
    margin-bottom: -350px;
    margin-left: -50px;
  }
`;

export const LeftSectionCardBottom = styled.div`
  display: flex;
  padding-left: 250px;
  z-index: 1;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 80%;
    margin-left: 50px;
  }
`;
