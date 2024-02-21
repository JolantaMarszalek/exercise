import styled from "styled-components";

export const LayoutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: var(--primary-red);

  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    height: 100vh;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
