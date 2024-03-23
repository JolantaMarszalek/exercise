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
  }
`;

export const LeftSectionCardTop = styled.div`
  display: flex;
  padding-left: 150px;
  position: static;
  z-index: 1;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftSectionCardBottom = styled.div`
  display: flex;
  padding-left: 100px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
