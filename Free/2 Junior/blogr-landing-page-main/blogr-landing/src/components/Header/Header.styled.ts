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
  color: var(--neutral-white--text);
`;

export const HeaderSectionLogin = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 50px;
  align-items: center;
`;
export const HeaderSectionLoginSingle = styled.div`
  color: var(--neutral-white--text);
`;
export const HeaderSectionLoginButton = styled.button`
  height: 40px;
  width: 120px;
  background-color: var(--neutral-white--text);
  color: var(--primary-light-red--CTA-text);
  border-radius: 30px;
  border: none;
  font-weight: bold;
`;

export const HeaderSectionBottom = styled.section`
  display: flex;
  flex-direction: column;
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

export const HeaderSectionBottomTitle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--neutral-white--text);

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionBottomDescribe = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--neutral-white--text);

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionBottomButtons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  position: relative;
  gap: 20px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionBottomButtonStart = styled.button`
  height: 40px;
  width: 120px;
  background-color: var(--neutral-white--text);
  color: var(--primary-light-red--CTA-text);
  border-radius: 30px;
  border: none;
  font-weight: bold;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionBottomButtonLearn = styled.button`
  height: 40px;
  width: 120px;
  background-color: var(--neutral-white--text);
  color: var(--primary-light-red--CTA-text);
  border-radius: 30px;
  border: none;
  font-weight: bold;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;
