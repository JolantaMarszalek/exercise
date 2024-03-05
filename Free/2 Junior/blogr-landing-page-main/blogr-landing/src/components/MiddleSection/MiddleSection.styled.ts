import styled from "styled-components";

export const MiddleSectionStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const MiddleSectionBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;

export const MiddleSectionStyledLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 400px;
  position: relative;
  line-height: 30px;
  margin-top: 100px;
  background-color: var(--gradient-bg-body--very-dark-desaturated-blue);
  /* z-index: -1; */

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const MySVG = styled.svg`
  display: flex;

  position: absolute;
  width: 100%;
  height: 600px;
  top: 0;
  left: 150px;
  margin-top: -65px;
`;

export const MiddleSectionStyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  position: relative;
  line-height: 30px;
  background-color: var(--gradient-bg-body--very-dark-desaturated-blue);
  margin-top: 100px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const MiddleSectionStyledRightSideTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  /* height: 100px; */
  position: relative;
  font-size: 40px;
  /* margin-top: 150px; */
  /* margin-bottom: 35px; */
  color: var(--neutral-white--text);
  z-index: 1;
  font-weight: 500;
  /* margin-top: 35px; */
  margin-bottom: 25px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const MiddleSectionStyledRightSideDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: auto;
  /* height: 200px; */
  position: relative;
  line-height: 30px;
  color: var(--neutral-white--text);
  margin-right: 300px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;
