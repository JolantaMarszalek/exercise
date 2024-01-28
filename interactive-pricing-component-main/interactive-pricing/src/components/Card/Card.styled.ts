import styled from "styled-components";

export const CardSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 600px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 8px 8px 24px 0px
    var(--neutral-light-grayish-blue--empty-slider-bar);
  background-color: var(--neutral-white--pricing-component-background);

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionTop = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */
  margin-top: 20px;
  text-transform: uppercase;
  color: var(--neutral-grayish-blue--text);

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionTopLeftText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */
  padding: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--neutral-grayish-blue--text);

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionTopRight = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  /* height: 100vh; */
  /* color: var(--neutral-grayish-blue--text); */

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionTopRightPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  font-size: 35px;
  font-weight: bold;
  padding: 10px;

  /* height: 100vh; */
  /* color: var(--neutral-grayish-blue--text); */

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionTopRightText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  letter-spacing: 1px;
  /* width: 100%; */
  /* height: 100vh; */
  color: var(--neutral-grayish-blue--text);

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionToggleSwitch = styled.label`
  width: 80%;
  /* margin: 50px auto; */
  /* height: 100vh; */

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionToggleInput = styled.input`
  width: 100%;

  /* display: none; */
`;

export const CardSectionToggleSlider = styled.span`
  width: 50%;
  margin: 50px auto;
  /* height: 100vh; */
  background-color: var(--primary-strong-cyan--slider-background);

  :hover {
    opacity: 1;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }

  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionMiddle = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionMiddleLeft = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */
  justify-content: flex-end;

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionMiddleLeftToggle = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: auto;
  /* height: 100vh; */

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 65px;
  height: 34px;
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--neutral-light-grayish-blue--toggle-background);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + & {
    background-color: var(--neutral-light-grayish-blue--toggle-background);
  }

  input:checked + &::before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export const CardSectionMiddleRight = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */
  justify-content: flex-start;

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionMiddleRightPrice = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  /* height: 100vh; */
  width: 100px;
  /* height: 100vh; */
  padding: 10px;
  height: 10px;
  border-radius: 25px;
  color: var(--primary-red--discount-text);
  background-color: var(--primary-light-grayish-red--discount-background);
  font-size: 11px;
  font-weight: bold;

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionMiddleText = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: auto;
  /* height: 100vh; */
  padding: 10px;
  color: var(--neutral-grayish-blue--text);
  font-size: 13px;

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionBottom = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */
  border-top: 1px solid var(--neutral-light-grayish-blue--toggle-background);

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  /* height: 100vh; */

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionBottomLeftList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionBottomLeftListSingleLine = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px;
  /* height: 100vh; */

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionBottomLeftListSingleLineImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  /* height: 100vh; */

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionBottomLeftListSingleLineDescribe = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  /* height: 100vh; */
  color: var(--neutral-grayish-blue--text);
  font-size: 13px;

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  /* height: 100vh; */

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const CardSectionBottomRightButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  /* height: 100vh; */
  padding: 10px;
  height: 40px;
  border-radius: 25px;
  font-size: 13px;
  background-color: var(--neutral-dark-desaturated-blue--text-CTA-background);
  color: var(--primary-pale-blue--CTA-text);
  /* font-weight: bold; */

  :hover {
    /* background-color: var(--neutral-dark-desaturated-blue--text-CTA-background); */
    color: var(--neutral-white--pricing-component-background);
    cursor: pointer;
  }

  :active {
    color: var(--neutral-white--pricing-component-background);
  }

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;
