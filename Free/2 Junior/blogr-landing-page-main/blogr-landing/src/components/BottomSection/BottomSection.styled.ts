import styled from "styled-components";

export const BottomSectionStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 100px;
  color: var(--primary-very-dark-blue--headingh);
  font-family: "Overpass", sans-serif;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 600px) {
  }
`;

export const BottomSectionStyledLeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: -1;
  position: relative;
  margin-left: -100px;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 600px) {
  }
`;

export const BottomSectionStyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    width: auto;
    margin: 0;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
  }
`;

export const BottomSectionStyledRightSideTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  position: relative;
  font-size: 30px;
  margin-top: 55px;
  margin-bottom: 25px;
  font-weight: 600;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    width: 90%;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
  }

  @media (max-width: 600px) {
  }
`;

export const BottomSectionStyledRightSideDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: auto;
  position: relative;
  line-height: 30px;
  margin-right: 300px;

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 600px) {
  }
`;
