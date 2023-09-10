import styled from "styled-components";

export const CountryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding: 8rem 0 0;
  width: auto;
  margin-left: 50px;
  margin-right: 50px;
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
