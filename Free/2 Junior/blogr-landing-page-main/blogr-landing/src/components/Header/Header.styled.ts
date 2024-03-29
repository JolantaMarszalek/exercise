import styled from "styled-components";

export const HeaderSectionBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  z-index: -1;
  background: linear-gradient(
    to right,
    var(--gradient-bg-intro-CTA-mobile--very-light-red),
    var(--gradient-bg-intro-CTA-mobile--light-red)
  );
  border-radius: 0 0 0 100px;
  font-family: "Overpass", sans-serif;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
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
  font-family: "Overpass", sans-serif;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 200px;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 80%;
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
  z-index: 2;
  height: 100%;
`;

export const HeaderSectionTopMenuSingle = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--neutral-white--text);
  z-index: 2;
  gap: 10px;
  width: 100px;
`;

export const HeaderSectionTopMenuSingleFirstLine = styled.div`
  display: flex;
  color: var(--neutral-white--text);
  z-index: 2;
  gap: 10px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const HeaderSectionTopMenuSingleImage = styled.div`
  color: var(--neutral-white--text);
  z-index: 2;
  font-size: 16px;
`;

export const HeaderSectionTopMenuAdditionalOptions = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--neutral-dark-black-blue--footer-background);
  background-color: var(--neutral-white--text);
  z-index: 2;
  border-radius: 10px;
  width: 150px;
`;

export const HeaderSectionTopMenuAdditionalOptionsSingle = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const HeaderSectionTopMenuAndLogin = styled.div`
  display: flex;
  gap: 20px;
  z-index: 2;
  margin-top: 180px;
  height: 100%;
`;

export const HeaderSectionTopMenuAndLoginMobile = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  justify-content: center;
  width: 100%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    background-color: var(--neutral-white--text);
    border-radius: 10px;
    margin-top: 200px;
    align-items: center;
  }
`;

export const HeaderSectionTopMenuAndLoginMobileSingle = styled.div`
  display: flex;
  z-index: 2;
  justify-content: center;
  gap: 10px;
  width: 100px;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    margin-top: 10px;
  }
`;

export const HeaderSectionTopMenuAndLoginMobileSingleLine = styled.div`
  display: flex;
  color: var(--neutral-dark-black-blue--footer-background);
  z-index: 2;
  gap: 10px;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const HeaderSectionTopMenuAndLoginMobileSingleImage = styled.div`
  color: var(--neutral-white--text);
  z-index: 2;
  font-size: 16px;
`;

export const HeaderSectionTopMenuAndLoginMobileAdditionalOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  z-index: 2;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: var(--neutral-grayish-blue--footer-text);
  border-radius: 10px;
`;

export const HeaderSectionTopMenuAndLoginMobileAdditionalOptionsSingle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  z-index: 2;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

export const HeaderSectionTopMenuAndLoginMobileLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  z-index: 1;
  padding-top: 10px;
  border-top: 1px solid var(--neutral-grayish-blue--footer-text);

  @media (max-width: 1024px) {
    margin-bottom: 15px;
  }
`;

export const HeaderSectionTopMenuAndLoginMobileLoginSingle = styled.div`
  color: var(--neutral-dark-black-blue--footer-background);
  z-index: 1;
`;

export const HeaderSectionTopMenuAndLoginMobileLoginButton = styled.button`
  height: 45px;
  width: 130px;
  background-color: var(--primary-light-red--CTA-text);
  color: var(--neutral-white--text);
  border-radius: 30px;
  border: none;
  font-weight: bold;
  z-index: 1;
  font-family: "Overpass", sans-serif;
  font-size: 16px;
  margin-top: -10px;

  &:hover {
    background-color: var(--primary-very-light-red--CTA-hover-bg);
    color: var(--neutral-white--text);
    cursor: pointer;
  }
`;

export const HeaderSectionTopLogin = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 50px;
  align-items: flex-start;
  z-index: 1;
`;

export const HeaderSectionTopLoginSingle = styled.div`
  color: var(--neutral-white--text);
  z-index: 1;
`;

export const HeaderSectionTopLoginButton = styled.button`
  height: 45px;
  width: 130px;
  background-color: var(--neutral-white--text);
  color: var(--primary-light-red--CTA-text);
  border-radius: 30px;
  border: none;
  font-weight: bold;
  z-index: 1;
  font-family: "Overpass", sans-serif;
  font-size: 16px;
  margin-top: -10px;

  &:hover {
    background-color: var(--primary-very-light-red--CTA-hover-bg);
    color: var(--neutral-white--text);
    cursor: pointer;
  }
`;

export const HeaderSectionBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 300px;
  position: relative;
  z-index: 0;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  font-size: 55px;
  font-weight: 500;
  font-family: "Overpass", sans-serif;

  @media (max-width: 1024px) {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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
  font-size: 18px;
  margin-top: 15px;

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
  margin-top: 15px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionBottomButtonStart = styled.button`
  height: 45px;
  width: 130px;
  background-color: var(--neutral-white--text);
  color: var(--primary-light-red--CTA-text);
  border-radius: 30px;
  border: none;
  font-weight: bold;
  z-index: 1;
  font-family: "Overpass", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: var(--primary-very-light-red--CTA-hover-bg);
    color: var(--neutral-white--text);
    cursor: pointer;
  }
`;

export const HeaderSectionBottomButtonLearn = styled.button`
  height: 45px;
  width: 130px;
  background-color: var(--primary-light-red--CTA-text);
  color: var(--neutral-white--text);
  border-radius: 30px;
  border: 1px solid white;
  font-weight: bold;
  z-index: 1;
  font-family: "Overpass", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: var(--neutral-white--text);
    color: var(--primary-light-red--CTA-text);
    cursor: pointer;
  }
`;
