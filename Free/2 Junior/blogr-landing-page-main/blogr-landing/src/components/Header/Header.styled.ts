import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  position: relative;
  background-color: red;

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
  background-color: red;
`;

export const HeaderSectionLogo = styled.div`
  margin-left: 50px;
`;

export const HeaderSectionMenu = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderSectionMenuSingle = styled.div`
  color: white;
`;

export const HeaderSectionLogin = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 50px;
`;
export const HeaderSectionLoginSingle = styled.div`
  color: white;
`;
export const HeaderSectionLoginButton = styled.button`
  border-radius: 10px;
  border: none;
`;
