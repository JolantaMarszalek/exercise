import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionLogo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 200px;
  justify-content: center;

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionAbout = styled.div`
  display: flex;
  align-items: center;
  padding-right: 200px;
  font-family: "Karla", sans-serif;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionAboutSingle = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  color: var(--neutral-dark-grayish-violet);
  font-weight: 700;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    color: var(--primary-dark-violet);
  }

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionAboutButton = styled.button`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  height: 40px;
  width: 150px;
  justify-content: center;
  background-color: var(--neutral-very-light-gray);
  align-items: center;
  color: var(--primary-dark-violet);
  border: 2px solid var(--primary-dark-violet);
  font-weight: 700;
  letter-spacing: 1px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    background-color: var(--primary-dark-violet);
    color: var(--neutral-very-light-gray);
    border: 2px solid var(--neutral-very-light-gray);
  }

  @media (max-width: 1024px) {
  }
`;
