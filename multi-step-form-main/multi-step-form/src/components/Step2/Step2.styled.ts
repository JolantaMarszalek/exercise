import styled from "styled-components";

export const Step2SectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
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

export const Step2ButtonContainer = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 10vh;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
