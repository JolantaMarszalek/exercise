import styled from "styled-components";

export const TopSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-dark-blue--testimonials-background);
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    margin: auto;
  }
`;

export const TopSectionImage = styled.img`
  display: flex;
  flex-direction: column;
  position: static;
  margin: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TopSectionBackground = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100vw;
  z-index: -1;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    bottom: 0;
  }
`;

export const FullWidthSVG = styled.svg`
  width: 100%;
  height: auto;
`;

export const TopSectionText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--neutral-white);
  gap: 20px;
  margin-top: 25px;
  align-items: center;
  z-index: 1;
  height: 550px;
`;

export const TopSectionTextTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  gap: 20px;
  font-size: 45px;
  text-align: center;
  font-weight: 700;
  z-index: 1;
  width: 50%;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const TopSectionTextDescribe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 25px;
  text-align: center;
  font-weight: 400;
  z-index: 1;
  width: 40%;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const TopSectionTextButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 250px;
  height: 50px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--neutral-white);
  border: none;
  background-image: linear-gradient(
    to right,
    var(--accent-cyan--inside-call-to-action-gradient),
    var(--accent-blue--inside-call-to-action-gradient)
  );
  z-index: 1;
`;
