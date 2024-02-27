import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionLogo = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
  }
`;

export const MainSectionTitle = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 5px;
  font-size: 45px;
  color: var(--neutral-gray);
  height: 75px;

  @media (max-width: 1024px) {
  }
`;

export const MainSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  height: 75px;

  @media (max-width: 1024px) {
  }
`;
