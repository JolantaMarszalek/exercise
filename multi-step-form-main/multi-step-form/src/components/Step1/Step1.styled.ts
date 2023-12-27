import styled from "styled-components";

export const Step1SectionStyle = styled.div`
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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 565px;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: auto;
  }
`;

export const Step1Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const Step1Describe = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  color: var(--neutral-cool-gray);
`;

export const Step1AboveInput = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const ErrorContainer = styled.div`
  color: red;
  text-align: right;
  font-size: 15px;
`;

export const Step1ButtonContainer = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
  margin-top: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: auto;
    display: flex;
    box-sizing: content-box;
    width: min(40rem, 100%);
    justify-content: space-between;
    height: 10vh;
    margin-top: 20px;
  }
`;
