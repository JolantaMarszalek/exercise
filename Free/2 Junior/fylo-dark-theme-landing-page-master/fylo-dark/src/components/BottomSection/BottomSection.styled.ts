import styled from "styled-components";

export const BottomSectionStyled = styled.section`
  display: flex;
  background-color: var(--primary-dark-blue--main-background);
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    margin: auto;
  }
`;

export const BottomSectionImage = styled.img`
  display: flex;
  flex-direction: column;
  margin: 50px;
  width: auto;
  height: auto;
  width: 50%;
`;

export const BottomSectionText = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--neutral-white);
  gap: 20px;
  margin-top: 25px;
  align-items: center;
  z-index: 1;
  width: 50%;
  height: auto;
  align-items: flex-start;
  margin: 50px;
`;

export const BottomSectionTextTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  gap: 20px;
  font-size: 45px;
  font-weight: 700;
  z-index: 1;
  width: 50%;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const BottomSectionTextDescribe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  font-weight: 400;
  z-index: 1;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 90%;
`;

export const BottomSectionTextLink = styled.div`
  display: flex;
  gap: 20px;
  font-size: 25px;
  text-align: center;
  font-weight: 400;
  z-index: 1;
  margin-top: 15px;
  margin-bottom: 15px;
  color: var(--accent-cyan--inside-call-to-action-gradient);
  text-decoration: underline;
`;
