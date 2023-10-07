import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  color: var(--dark-theme-light-grayish-blue-hover);
  font-size: 35px;
  font-weight: bold;
  padding: 50px;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: var(--primary-check-background);
  color: var(--dark-theme-light-grayish-blue-hover);
`;

export const HeaderSectionLeft = styled.div`
  width: auto;
`;

export const HeaderSectionRight = styled.div`
  width: auto;
  padding: 50px;
`;
