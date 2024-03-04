import styled from "styled-components";

export const HeaderSectionBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  z-index: -1;
  background-color: pink;
`;

export const HeaderSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  /* z-index: 1; */

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  position: relative;
  z-index: 1;

  /* background-color: red; */

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionTopLogo = styled.div`
  margin-left: 50px;
  z-index: 2;
`;

export const HeaderSectionTopMenu = styled.div`
  display: flex;
  gap: 20px;
  z-index: 1;
`;

export const HeaderSectionTopMenuSingle = styled.div`
  color: var(--neutral-white--text);
  z-index: 1;
`;

export const HeaderSectionTopLogin = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 50px;
  align-items: center;
  z-index: 1;
`;

export const HeaderSectionTopLoginSingle = styled.div`
  color: var(--neutral-white--text);
  z-index: 1;
`;

export const HeaderSectionTopLoginButton = styled.button`
  height: 40px;
  width: 120px;
  background-color: var(--neutral-white--text);
  color: var(--primary-light-red--CTA-text);
  border-radius: 30px;
  border: none;
  font-weight: bold;
  z-index: 1;
`;

export const HeaderSectionBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  position: relative;
  /* background-color: red; */
  z-index: 1;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionBottomTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--neutral-white--text);
  z-index: 1;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionBottomDescribe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--neutral-white--text);
  z-index: 1;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionBottomButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  position: relative;
  gap: 20px;
  z-index: 1;

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
  z-index: 1;

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
  z-index: 1;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;
