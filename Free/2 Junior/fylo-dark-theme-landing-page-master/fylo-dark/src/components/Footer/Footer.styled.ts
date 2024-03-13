import styled from "styled-components";

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-dark-blue--footer-background);
  justify-content: space-between;
  align-items: center;
  height: auto;
  z-index: 1;

  @media (max-width: 1024px) {
    margin-top: auto;
  }
`;

export const FooterSectionLogo = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  margin: 50px;
  width: 95%;
  margin-top: 250px;

  @media (max-width: 1024px) {
    margin-top: 350px;
    width: 80%;
  }
`;

export const FooterSectionBottomText = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  margin: 50px;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;

export const FooterSectionBottomTextSectionFirst = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  width: 400px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const FooterSectionBottomTextSectionFirstImage = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
`;

export const FooterSectionBottomTextSectionFirstText = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
`;

export const FooterSectionBottomTextSectionSecond = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  width: 400px;
`;

export const FooterSectionBottomTextSectionSecondSingleLine = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  margin-left: 25px;

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export const FooterSectionBottomTextSectionSecondSingleLineImage = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
`;

export const FooterSectionBottomTextSectionSecondSingleLineText = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
`;

export const FooterSectionBottomTextSectionThird = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  width: 400px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const FooterSectionBottomTextSectionThirdSingleBar = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  margin-left: 25px;

  @media (max-width: 1024px) {
    margin-top: 10px;
    margin-left: 0;
  }
`;

export const FooterSectionBottomTextSectionThirdSingleBarSingleLine = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;

  &:hover {
    /* text-decoration: underline; */
    font-weight: bold;
    cursor: pointer;
  }
`;

export const FooterSectionBottomTextSectionFourth = styled.div`
  display: flex;
  gap: 20px;
  width: 400px;
`;

export const FooterSectionBottomTextSectionFourthImage = styled.div`
  display: flex;
  gap: 20px;
`;
