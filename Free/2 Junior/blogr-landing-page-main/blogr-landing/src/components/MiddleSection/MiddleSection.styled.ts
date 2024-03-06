import styled from "styled-components";

export const MiddleSectionStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 400px;
  position: relative;
  margin-top: 200px;
  background: linear-gradient(
    to right,
    var(--gradient-bg-body--very-dark-gray-blue),
    var(--gradient-bg-body--very-dark-desaturated-blue)
  );
  border-radius: 0 100px 0 100px;
  font-family: "Overpass", sans-serif;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 600px) {
  }
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

  @media (max-width: 1024px) {
    width: auto;
    margin: 0;
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

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0;
    text-align: center;
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
  position: relative;
  font-size: 40px;
  color: var(--neutral-white--text);
  z-index: 1;
  font-weight: 600;
  margin-bottom: 25px;

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

export const MiddleSectionStyledRightSideDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: auto;
  position: relative;
  line-height: 30px;
  color: var(--neutral-white--text);
  margin-right: 300px;

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0;
    text-align: center;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
  }
`;
