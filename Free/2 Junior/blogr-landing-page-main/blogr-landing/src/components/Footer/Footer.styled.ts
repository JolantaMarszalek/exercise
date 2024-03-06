import styled from "styled-components";

export const FooterSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 400px;
  position: relative;
  background-color: var(--neutral-dark-black-blue--footer-background);
  border-radius: 0 100px 0 0;
  color: var(--primary-very-dark-blue--headingh);
  font-family: "Overpass", sans-serif;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  @media (max-width: 600px) {
  }
`;

export const FooterSectionLogo = styled.div`
  display: flex;
  height: 200px;
  margin-left: 200px;
  z-index: 2;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    height: 100px;
  }
`;

export const FooterSectionMenu = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
  z-index: 1;
  margin-right: 200px;
  width: 100%;
  height: 200px;
  justify-content: space-evenly;
  margin-top: 10px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 600px) {
  }
`;

export const FooterSectionMenuSingle = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--neutral-white--text);
  z-index: 1;
  gap: 10px;
`;

export const FooterSectionMenuSingleTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--neutral-white--text);
  z-index: 1;
  gap: 10px;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const FooterSectionMenuSingleLine = styled.div`
  color: var(--neutral-grayish-blue--footer-text);
  z-index: 1;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
