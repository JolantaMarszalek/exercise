import styled from "styled-components";

export const TopSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  color: var(--primary-very-dark-blue--headingh);
  font-family: "Overpass", sans-serif;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;

export const TopSectionStyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  font-size: 40px;
  margin-top: 150px;
  color: var(--primary-very-dark-blue--headingh);
  z-index: 1;
  font-weight: 600;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 100px;
  }

  @media (max-width: 600px) {
  }
`;

export const TopSectionStyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 600px;
  position: relative;
  margin-left: 200px;
  margin-right: -100px;
  gap: 100px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0;
    margin-top: 20px;
  }

  @media (max-width: 600px) {
  }
`;

export const TopSectionStyledBottomLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  margin-right: 200px;

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 600px) {
  }
`;

export const TopSectionStyledBottomLeftSideTitle = styled.div`
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
    width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
  }

  @media (max-width: 600px) {
  }
`;

export const TopSectionStyledBottomLeftSideDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: auto;
  position: relative;
  line-height: 30px;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 600px) {
  }
`;

export const TopSectionStyledBottomRightSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: -1;
  position: relative;

  @media (max-width: 1024px) {
    width: auto;
    margin: 0;
  }

  @media (max-width: 600px) {
  }
`;
