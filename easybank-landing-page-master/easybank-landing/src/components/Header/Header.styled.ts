import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionLogo = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;

export const HeaderSectionLink = styled.div`
  position: static;
  justify-content: center;
  flex-direction: row;
  display: flex;
  gap: 20px;
  margin: 10px;
  width: 800px;
  color: var(--neutral-grayish-blue);
`;

export const HeaderSectionButton = styled.div`
  position: static;
  flex-direction: row;
  display: flex;
  margin: 10px;
  gap: 20px;
`;
