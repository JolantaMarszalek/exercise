import styled from "styled-components";

export const CountryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  padding: 8rem 0 0;
  /* width: 95%; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  background-color: var(--background-color-app);
  color: var(--color-text);

  @media (max-width: 75em) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 48.12em) {
    grid-template-columns: 1fr;
    padding-top: 4rem;
  }
`;
