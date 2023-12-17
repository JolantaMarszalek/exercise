import styled from "styled-components";

export const Step3SectionStyle = styled.div`
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

export const Step3Title = styled.div`
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

export const Step3Describe = styled.div`
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

export const Step3CardSection = styled.div`
  display: flex;
  flex-direction: column;
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

export const Step3SingleCardSection = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 75px;
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

export const Step3SingleCardTextSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  border-radius: 10px;
  /* margin: auto; */

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

export const Step3SingleCardTitle = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  /* margin-top: 20px; */
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

export const Step3SingleCardDescribe = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  /* margin-top: 20px; */
  /* font-weight: bold; */
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

export const Step3SingleCardPrice = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  /* margin-bottom: 20px; */
  margin-right: 20px;

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

export const Step3ButtonContainer = styled.section`
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
