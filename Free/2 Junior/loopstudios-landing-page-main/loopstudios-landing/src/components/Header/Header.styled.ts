import styled from "styled-components";

export const HeaderStyled = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const HeaderStyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin-left: 100px;
  /* margin-right: 100px; */

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HeaderStyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 50px;
  /* margin-left: 100px; */
  margin-right: 100px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

export const HeaderStyledMenuSingle = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary-white);
  padding-left: 25px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
