import styled from "styled-components";

export const Step1SectionStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
  height: 600px;
  background-color: white;
  border-radius: 10px;
  margin: auto;
  margin-top: 100px;

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
