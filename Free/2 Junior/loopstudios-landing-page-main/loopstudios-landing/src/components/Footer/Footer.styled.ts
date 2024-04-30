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
  padding-left: 20px;
  /* padding-right: 10px; */

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
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
  /* padding-left: 10px; */
  padding-right: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
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
