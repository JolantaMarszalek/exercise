import styled from "styled-components";

export const SingleCountryGrid = styled.section`
  display: flex;
  gap: 3rem;
  background-color: var(--background-color-app);

  @media (max-width: 75em) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 48.12em) {
    grid-template-columns: 1fr;
    padding-top: 4rem;
  }
`;
