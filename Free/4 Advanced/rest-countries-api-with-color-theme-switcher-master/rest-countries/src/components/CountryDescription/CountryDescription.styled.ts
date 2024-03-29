import styled from "styled-components";

export const SingleCountry = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  width: 90%;
  height: 100%;
  margin-bottom: 200px;
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

export const SingleCountrySectionLeft = styled.div`
  display: grid;
  gap: 3rem;
  padding: 8rem 0 0;
  width: auto;
  background-color: var(--background-color-app);
`;

export const SingleCountrySectionRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 8rem 0 0;
  width: 100%;
  background-color: var(--background-color-app);
  color: var(--color-text);
`;

export const SingleCountryFlag = styled.div`
  display: grid;
  align-content: center;
  place-items: center;
  flex-shrink: 0;
  width: auto;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`;
export const SingleCountryName = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: left;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
`;
export const SingleCountryDescriptionsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const SingleCountryDescriptions = styled.div`
  display: grid;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const SingleCountryBorderCountries = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  padding: 10px;
`;
