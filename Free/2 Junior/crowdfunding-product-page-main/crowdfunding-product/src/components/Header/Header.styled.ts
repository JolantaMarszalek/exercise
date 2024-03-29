import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeaderSectionLogo = styled.div`
  position: static;
  display: flex;
  padding: 15px;
  justify-content: center;
  margin-left: 200px;
  margin-top: 50px;
  z-index: 1;
`;

export const HeaderSectionLink = styled.div`
  position: static;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  display: flex;
  gap: 20px;
  margin-top: 50px;
  margin-right: 200px;
  width: 100%;
  color: white;
  z-index: 1;
`;

export const HeaderSectionSingleLink = styled.div`
  position: static;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
  gap: 20px;
  margin: 10px;
  width: auto;
`;

export const HeaderSectionMobileMenu = styled.div`
  display: none;
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  width: 200px;
  align-items: center;
`;
