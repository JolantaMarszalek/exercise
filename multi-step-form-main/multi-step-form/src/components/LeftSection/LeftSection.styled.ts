import styled from "styled-components";

export const LeftSectionStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: 1000px;
  height: 600px;
  background-color: skyblue;
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

export const LeftNavigationStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 565px;
  background-color: navy;
  border-radius: 10px;
  margin-left: 15px;

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