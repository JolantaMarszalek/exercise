import styled from "styled-components";

export const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 200px;
  margin-right: 200px;
  background-color: var(--primary-dark-violet);

  @media (max-width: 1024px) {
  }
`;

export const BottomSectionCard = styled.div`
  display: flex;
  background-color: var(--primary-dark-violet);
  justify-content: space-between;
  width: 100%;
  height: 200px;
  justify-content: space-around;

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
  font-size: 50px;
  color: var(--neutral-very-light-gray);

  @media (max-width: 1024px) {
  }
`;

export const BottomSectionCardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

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
