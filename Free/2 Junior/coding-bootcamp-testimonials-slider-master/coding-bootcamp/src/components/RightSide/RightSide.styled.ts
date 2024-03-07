import styled from "styled-components";

export const RightSideStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: grey;
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

export const RightSideImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  margin-right: 50px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;

export const RightSideSlider = styled.button`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 50px;
  border-radius: 30px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;
