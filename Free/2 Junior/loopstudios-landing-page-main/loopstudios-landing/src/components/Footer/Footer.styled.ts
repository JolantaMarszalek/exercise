import styled from "styled-components";

export const FooterStyled = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-black);

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const FooterStyledLeft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary-black);
  width: 50%;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const FooterStyledRight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary-black);
  width: 50%;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const FooterStyledHeaderLogo = styled.div`
  display: flex;
  margin-left: 100px;
  padding-top: 50px;
  padding-left: 50px;
  padding-bottom: 10px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    padding-top: 50px;
    padding-bottom: 30px;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterStyledHeaderImages = styled.div`
  display: flex;
  margin-right: 100px;
  align-items: center;
  justify-content: flex-end;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 10px;

  @media (max-width: 1024px) {
    display: flex;
    margin: 0;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 30px;
    align-items: center;
    justify-content: center;
  }
`;
export const FooterStyledHeaderImageSingle = styled.div`
  display: flex;
  flex-direction: column;
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

export const FooterStyledBottomMenu = styled.div`
  display: flex;
  margin-left: 100px;
  padding-top: 10px;
  padding-left: 50px;
  padding-bottom: 50px;
  gap: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 30px;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterStyledBottomMenuSingle = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary-white);
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
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 50px;
  margin-right: 100px;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 50px;
    align-items: center;
    justify-content: center;
  }
`;
