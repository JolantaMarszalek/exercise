import styled from "styled-components";

export const SingleCountry = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 8rem 0 0;
  width: 100%;
  height: auto;
  background-color: var(--background-color-app);
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
    height: 100%;
  }
`;
export const SingleCountryName = styled.div`
  display: grid;
  align-items: center;
  justify-content: left;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
`;

export const SingleCountryNativeName = styled.div`
  display: grid;
  align-items: center;
  padding: 10px;
`;
export const SingleCountryPopulation = styled.div`
  display: grid;
  align-items: center;
  padding: 10px;
`;

export const SingleCountryRegion = styled.div`
  display: grid;
  align-items: left;
  padding: 10px;
`;

export const SingleCountrySubRegion = styled.div`
  display: grid;
  align-items: left;
  padding: 10px;
`;

export const SingleCountryCapital = styled.div`
  display: grid;
  align-items: left;
  padding: 10px;
`;

export const SingleCountryTopLevelDomain = styled.div`
  display: grid;
  align-items: left;
  padding: 10px;
`;

export const SingleCountryCurrencies = styled.div`
  display: grid;
  align-items: left;
  padding: 10px;
`;

export const SingleCountryLanguages = styled.div`
  display: grid;
  align-items: left;
  padding: 10px;
`;

export const SingleCountryBorderCountries = styled.div`
  display: grid;
  align-items: left;
  padding: 10px;
`;
