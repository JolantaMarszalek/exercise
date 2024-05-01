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
  margin-right: 100px;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

export const HeaderStyledMenuSingle = styled.div`
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
