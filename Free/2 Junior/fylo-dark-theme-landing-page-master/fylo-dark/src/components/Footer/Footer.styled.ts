import styled from "styled-components";

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-dark-blue--testimonials-background);
  justify-content: space-between;
  align-items: center;
  height: auto;

  @media (max-width: 1024px) {
    margin: auto;
  }
`;

export const FooterSectionLogo = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  margin: 50px;
  width: 95%;
`;

export const FooterSectionBottomText = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  margin: 50px;
`;

export const FooterSectionBottomTextSectionFirst = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  /* margin: 50px; */
`;

export const FooterSectionBottomTextSectionFirstImage = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  /* margin: 50px; */
`;

export const FooterSectionBottomTextSectionFirstText = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  /* margin: 50px; */
`;

export const FooterSectionBottomTextSectionSecond = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  /* margin: 50px; */
`;
export const FooterSectionBottomTextSectionSecondSingleLine = styled.div`
  display: flex;

  position: static;
  color: var(--neutral-white);
  gap: 20px;
  /* margin: 50px; */
`;

export const FooterSectionBottomTextSectionSecondSingleLineImage = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  /* margin: 50px; */
`;

export const FooterSectionBottomTextSectionSecondSingleLineText = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  /* margin: 50px; */
`;

export const FooterSectionBottomTextSectionThird = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  /* margin: 50px; */
`;

export const FooterSectionBottomTextSectionFourth = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  /* margin: 50px; */
`;

export const FooterSectionTextSingle = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  gap: 20px;
  width: 100px;

  &:hover {
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
  }
`;
