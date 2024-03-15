import styled from "styled-components";

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--neutral-very-light-gray);

  @media (max-width: 1024px) {
  }
`;

export const FooterSectionTop = styled.div`
  display: flex;
  padding-left: 200px;
  padding-right: 200px;
  justify-content: space-between;
  /* border-bottom: 1px solid var(--primary-grayish-blue); */

  @media (max-width: 1024px) {
  }
`;

export const FooterSectionTopLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1024px) {
  }
`;

export const FooterSectionTopSocialMedia = styled.div`
  display: flex;
  padding-left: 100px;
  justify-content: center;

  @media (max-width: 1024px) {
  }
`;

export const FooterSectionTopSocialMediaSingle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 1024px) {
  }
`;

export const FooterSectionBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 50px;
  padding-bottom: 100px;

  @media (max-width: 1024px) {
  }
`;

export const FooterSectionBottomAbout = styled.div`
  display: flex;
  align-items: center;
  font-family: "Karla", sans-serif;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
  }
`;

export const FooterSectionBottomAboutSingleBar = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: 700;
  gap: 20px;

  @media (max-width: 1024px) {
  }
`;

export const FooterSectionBottomAboutSingleBarAbout = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  color: var(--neutral-dark-grayish-violet);
  font-weight: 700;
  gap: 20px;
  padding-bottom: 20px;
  padding-top: 20px;

  @media (max-width: 1024px) {
  }
`;

export const FooterSectionBottomAboutSingleBarSingle = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--primary-dark-violet);

  &:hover {
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
  }
`;
