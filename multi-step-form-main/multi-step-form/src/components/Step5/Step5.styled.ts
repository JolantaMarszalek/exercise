import styled from "styled-components";

export const Step5SectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 565px;
  background-color: white;
  border-radius: 10px;
  margin: auto;

  @media (max-width: 1024px) {
    width: auto;
  }
`;

export const Step5Image = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    width: auto;
  }
`;

export const Step5Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    width: auto;
  }
`;

export const Step5Describe = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: var(--neutral-cool-gray);
  text-align: center;
  font-size: 18px;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;
