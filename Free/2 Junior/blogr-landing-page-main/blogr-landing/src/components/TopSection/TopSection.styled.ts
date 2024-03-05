import styled from "styled-components";

export const TopSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  color: var(--primary-very-dark-blue--headingh);

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const TopSectionBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;

export const TopSectionStyledTitle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  font-size: 40px;
  margin-top: 150px;
  /* margin-bottom: 35px; */
  color: var(--primary-very-dark-blue--headingh);
  z-index: 1;
  font-weight: 500;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const TopSectionStyledBottom = styled.section`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 600px;
  position: relative;
  margin-left: 200px;
  margin-right: -200px;
  gap: 200px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const TopSectionStyledBottomLeftSide = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  /* margin-left: 100px; */

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const TopSectionStyledBottomLeftSideTitle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  position: relative;
  font-size: 30px;
  margin-top: 55px;
  margin-bottom: 25px;
  font-weight: 500;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const TopSectionStyledBottomLeftSideDescribe = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  line-height: 30px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const TopSectionStyledBottomRightSide = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: -1;

  position: relative;
  /* margin-right: 100px; */

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;
