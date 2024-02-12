import styled from "styled-components";

export const MobileMenuSection = styled.section`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 9999;
  background-color: hsla(0, 0%, 0%, 0.75);
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;

export const HeaderSectionLink = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding-top: 10px;
  background-color: white;
  border-radius: 10px;
`;

export const MobileMenuSingleLink = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
`;

export const MobileMenuSingleMiddleLink = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding-left: 20px;
`;

export const HeaderMobileButton = styled.div`
  position: static;
  flex-direction: row;
  justify-content: center;
  display: flex;
  margin: 10px;
  gap: 20px;
  font-size: 15px;
  letter-spacing: 2px;
  width: 250px;
  height: 35px;
  border-radius: 5px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardMobileSectionButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: bold;
  font-size: 20px;
  width: 90%;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 600px) {
  }
`;

export const CloseButton = styled.button`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  width: 30px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;
  z-index: 999;
`;
