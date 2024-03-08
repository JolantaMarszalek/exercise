import styled from "styled-components";

export const RightSideStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;

export const RightSideBackground = styled.div`
  display: flex;
  position: absolute;
  width: auto;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
  margin-top: 200px;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 400px;
  }

  @media (max-width: 600px) {
  }
`;

export const RightSideImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  margin-right: 50px;

  @media (max-width: 1024px) {
    width: 100%;
    margin: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const RightSideSlider = styled.button`
  display: flex;
  width: 140px;
  height: 60px;
  border-radius: 50px;
  align-items: center;
  justify-content: space-around;
  border: none;
  margin-top: -30px;
  margin-right: 300px;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
    width: 140px;
    height: 60px;
    margin-top: -30px;
  }

  @media (max-width: 600px) {
  }
`;
