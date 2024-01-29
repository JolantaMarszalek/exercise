import styled from "styled-components";

export const TopSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;

  @media (max-width: 700px) {
  }

  @media (max-width: 375px) {
  }
`;

export const TopSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 30px;
  /* height: 100vh; */
  font-weight: bold;

  @media (max-width: 700px) {
    width: auto;
  }

  @media (max-width: 375px) {
  }
`;

export const TopSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: var(--neutral-grayish-blue--text);

  @media (max-width: 700px) {
    width: auto;
  }

  @media (max-width: 375px) {
  }
`;
