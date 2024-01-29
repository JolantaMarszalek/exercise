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
    width: auto;
  }
`;

export const CardSectionTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const CardSectionTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  text-transform: uppercase;
  color: var(--neutral-grayish-blue--text);

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const CardSectionTopLeftText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--neutral-grayish-blue--text);

  @media (max-width: 700px) {
    width: 100%;
    font-size: 13px;
  }
`;

export const CardSectionTopRightDesktop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 700px) {
    display: none;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const CardSectionTopRightMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 700px) {
    display: none;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const CardSectionTopRightPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-weight: bold;
  padding: 10px;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const CardSectionTopRightText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  letter-spacing: 1px;
  color: var(--neutral-grayish-blue--text);

  @media (max-width: 700px) {
    width: auto;
    font-size: 13px;
  }
`;

export const CardSectionToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 700px) {
  }
`;

export const CardSectionToggleSwitch = styled.label`
  width: 80%;

  @media (max-width: 700px) {
  }
`;

export const CardSectionToggleInput = styled.input`
  width: 100%;
`;

export const CardSectionToggleSlider = styled.span`
  width: 50%;
  margin: 50px auto;
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
`;

export const CardSectionMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 700px) {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CardSectionMiddleLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  justify-content: flex-end;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const CardSectionMiddleLeftToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;

  @media (max-width: 700px) {
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
  align-items: center;
  justify-content: center;
  width: 100%;
  justify-content: flex-start;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const CardSectionMiddleRightPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 10px;
  height: 10px;
  border-radius: 25px;
  color: var(--primary-red--discount-text);
  background-color: var(--primary-light-grayish-red--discount-background);
  font-size: 11px;
  font-weight: bold;

  .price {
    display: none;
  }

  @media (max-width: 700px) {
    .discount {
      display: none;
    }
    .price {
      display: inline-block;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    font-size: 10px;
  }
`;

export const CardSectionMiddleText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 10px;
  color: var(--neutral-grayish-blue--text);
  font-size: 13px;

  @media (max-width: 700px) {
    width: 100%;
    font-size: 11px;
  }
`;

export const CardSectionBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid var(--neutral-light-grayish-blue--toggle-background);

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardSectionBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 700px) {
  }
`;

export const CardSectionBottomLeftList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 700px) {
  }
`;

export const CardSectionBottomLeftListSingleLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px;

  @media (max-width: 700px) {
  }
`;

export const CardSectionBottomLeftListSingleLineImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;

  @media (max-width: 700px) {
  }
`;

export const CardSectionBottomLeftListSingleLineDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: var(--neutral-grayish-blue--text);
  font-size: 13px;

  @media (max-width: 700px) {
    font-size: 11px;
  }
`;

export const CardSectionBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 700px) {
  }
`;

export const CardSectionBottomRightButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  padding: 10px;
  height: 40px;
  border-radius: 25px;
  font-size: 13px;
  background-color: var(--neutral-dark-desaturated-blue--text-CTA-background);
  color: var(--primary-pale-blue--CTA-text);

  :hover {
    color: var(--neutral-white--pricing-component-background);
    cursor: pointer;
  }

  :active {
    color: var(--neutral-white--pricing-component-background);
  }

  @media (max-width: 700px) {
    font-size: 11px;
    margin-bottom: 20px;
  }
`;
