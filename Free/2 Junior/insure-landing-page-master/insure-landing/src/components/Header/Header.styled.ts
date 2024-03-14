import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionLogo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 100px;

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionAbout = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  padding-right: 100px;
  font-family: "Karla", sans-serif;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionAboutSingle = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  padding: 20px;
  color: var(--neutral-dark-grayish-violet);
  font-weight: 700;

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionAboutButton = styled.button`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  height: 40px;
  width: 120px;
  justify-content: center;
  background-color: white;
  align-items: center;
  color: var(--primary-dark-violet);
  font-weight: 700;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
  }
`;
