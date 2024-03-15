import styled from "styled-components";

export const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
  }
`;

export const BottomSectionCard = styled.div`
  display: flex;
  /* flex-direction: column; */
  background-color: var(--primary-dark-violet);
  justify-content: space-between;
  width: 80%;
  height: 200px;

  @media (max-width: 1024px) {
  }
`;

export const BottomSectionCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
  }
`;

export const BottomSectionCardLeftTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "DM Serif Display", serif;
  padding-left: 100px;
  padding-right: 100px;
  font-size: 50px;
  color: var(--neutral-very-light-gray);

  @media (max-width: 1024px) {
  }
`;

export const BottomSectionCardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
  padding-right: 100px;

  @media (max-width: 1024px) {
  }
`;

export const BottomSectionCardRightButton = styled.button`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  height: 40px;
  width: 150px;
  justify-content: center;
  background-color: var(--primary-dark-violet);
  align-items: center;
  color: var(--neutral-very-light-gray);
  border: 2px solid var(--neutral-very-light-gray);
  font-weight: 700;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
  }
`;
