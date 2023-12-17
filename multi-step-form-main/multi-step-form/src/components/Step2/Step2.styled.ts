import styled from "styled-components";

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

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
  }
`;

export const Step2Title = styled.div`
  display: flex;
  /* position: relative; */
  justify-content: flex-start;
  align-items: center;
  /* margin: auto; */
  font-size: 30px;
  font-weight: bold;
  /* margin-left: 30px; */
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
  }
`;

export const Step2Describe = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  /* margin: auto; */
  /* margin-left: 30px; */
  margin-bottom: 20px;
  color: var(--neutral-cool-gray);

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
  }
`;

export const Step2CardSection = styled.div`
  display: flex;
  position: relative;
  /* justify-content: flex-start; */
  align-items: center;
  /* margin: auto; */
  /* margin-left: 30px; */
  /* margin-bottom: 20px; */
  justify-content: space-between;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
  }
`;

export const Step2SingleCardSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  border: 2px solid black;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
  }
`;

export const Step2SingleCardImage = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
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

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
  }
`;

export const Step2SingleCardPrice = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
  }
`;

export const Step2ToggleContainer = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: auto; */
  height: 10vh;
  margin-top: 20px;
  background: var(--primary-pastel-blue);
  border-radius: 20px;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Step2ToggleText = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: auto; */
  height: 10vh;
  margin-top: 20px;
  font-weight: bold;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Step2Toggle = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: auto; */
  height: 10vh;
  margin-top: 20px;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 15px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  input:checked + & {
    background-color: #2196f3;
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
  align-items: center;
  /* margin: auto; */
  height: 10vh;
  margin-top: 20px;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
