import styled from "styled-components";

export const BottomStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  height: 200px;
  width: 100%;
  margin-top: 100px;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BottomStyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BottomStyledHeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  padding: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BottomStyledHeaderButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  margin-right: 100px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BottomStyledHeaderButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  height: 50px;
  width: 150px;
  align-items: center;
  background-color: var(--primary-white);
  letter-spacing: 4px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BottomStyledGallery = styled.div`
  justify-content: space-between;
  width: 100%;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  gap: 30px;
  justify-items: center;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BottomStyledGallerySingleCard = styled.div`
  justify-content: space-between;
  width: 250px;
  height: 450px;
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BottomStyledGallery2 = styled.div`
  justify-content: space-between;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  justify-items: center;
  padding-bottom: 30px;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BottomStyledGallerySingleCardText2 = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: var(--primary-white);
  font-weight: 300;
  font-size: 40px;
  padding: 55px;
  transition: color 0.3s;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BottomStyledGallerySingleCard2 = styled.div`
  justify-content: space-between;
  width: 350px;
  height: 650px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  transition: background-color 0.3s;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }

  &:hover {
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.7);
      transition: opacity 0.3s;
      z-index: 1;
    }
  }

  &:hover ${BottomStyledGallerySingleCardText2} {
    color: black;
    z-index: 2;
  }
`;
