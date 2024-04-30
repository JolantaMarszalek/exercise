import styled from "styled-components";

export const FooterStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary-black);

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterStyledHeader = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterStyledHeaderLogo = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 50px;
  margin-left: 100px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterStyledHeaderImages = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 50px;
  margin-right: 100px;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
export const FooterStyledHeaderImageSingle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  /* padding-right: 10px; */
  position: relative;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  &:hover::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 40%;
    height: 2px;
    background-color: var(--primary-white);
  }
`;

export const FooterStyledBottom = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterStyledBottomMenu = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 50px;
  margin-left: 100px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterStyledBottomMenuSingle = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary-white);
  padding-left: 10px;
  padding-right: 10px;
  position: relative;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  &:hover::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 40%;
    height: 2px;
    background-color: var(--primary-white);
  }
`;

export const FooterStyledBottomText = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary-dark-gray);
  padding: 50px;
  margin-right: 100px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
