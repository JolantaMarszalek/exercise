import styled, { css } from "styled-components";

export const Step2SectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  width: 500px;
  height: 565px;
  background-color: white;
  border-radius: 10px;
  margin: auto;

  @media (max-width: 1024px) {
    width: auto;
  }
`;

export const Step2Title = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const Step2Describe = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  color: var(--neutral-cool-gray);
`;

export const Step2CardSection = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: auto;
  }
`;
interface Step2SingleCardSectionProps {
  isSelected: boolean;
}

const selectedStyles = css`
  background-color: var(--neutral-alabaster);
  border: 1px solid var(--primary-purplish-blue);
`;

export const Step2SingleCardSection = styled.div<Step2SingleCardSectionProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  width: 150px;
  height: 180px;
  border-radius: 10px;
  border: 1px solid var(--neutral-cool-gray);
  cursor: pointer;

  &:hover {
    background-color: var(--neutral-alabaster);
    border: 1px solid var(--primary-purplish-blue);
  }

  &:active {
    background-color: var(--neutral-alabaster);
    border: 1px solid var(--primary-purplish-blue);
  }

  ${({ isSelected }) => isSelected && selectedStyles}

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 75px;
  }
`;

export const Step2SingleCardImage = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;

  @media (max-width: 1024px) {
    margin: 20px;
  }
`;

export const Step2SingleCardTitle = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
  font-weight: bold;

  @media (max-width: 1024px) {
    margin: auto;
  }
`;

export const Step2SingleCardPrice = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 15px;
  color: var(--neutral-cool-gray);

  @media (max-width: 1024px) {
    margin: 20px;
  }
`;

export const Step2ToggleContainer = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
  margin-top: 20px;
  background: var(--neutral-alabaster);
  border-radius: 10px;
`;

export const Step2ToggleText = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  font-weight: bold;
  font-size: 15px;
`;

export const Step2Toggle = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

export const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 25px;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primary-marine-blue);
  border-radius: 15px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  input:checked + & {
    background-color: var(--primary-marine-blue);
  }

  input:focus + & {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + &:before {
    transform: translateX(26px);
  }
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Step2ButtonContainer = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: space-between;
  height: 10vh;
  margin-top: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: auto;
    box-sizing: content-box;
    width: min(40rem, 100%);
    justify-content: space-between;
    height: 10vh;
    margin-top: 20px;
  }
`;
