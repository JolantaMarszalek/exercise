import styled from "styled-components";

export const SingleCountry = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  /* padding: 8rem 0 0; */
  width: 90%;
  height: 100%;
  margin-bottom: 200px;
  background-color: var(--background-color-app);
`;

export const SingleCountrySectionLeft = styled.div`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  gap: 3rem;
  padding: 8rem 0 0;
  width: auto;
  background-color: var(--background-color-app);
`;

export const SingleCountrySectionRight = styled.div`
  display: grid;
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
  width: 100%;
  align-items: center;
  justify-content: left;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
`;

export const SingleCountryDescriptions = styled.div`
  display: grid;
  /* flex-direction: row; */
  align-items: center;
  padding: 10px;
`;

// export const SingleCountryNativeName = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 10px;
// `;

// export const SingleCountryPopulation = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 10px;
// `;

// export const SingleCountryRegion = styled.div`
//   display: flex;
//   align-items: left;
//   padding: 10px;
// `;

// export const SingleCountrySubRegion = styled.div`
//   display: flex;
//   align-items: left;
//   padding: 10px;
// `;

// export const SingleCountryCapital = styled.div`
//   display: flex;
//   align-items: left;
//   padding: 10px;
// `;

// export const SingleCountryTopLevelDomain = styled.div`
//   display: flex;
//   align-items: left;
//   padding: 10px;
// `;

// export const SingleCountryCurrencies = styled.div`
//   display: flex;
//   align-items: left;
//   padding: 10px;
// `;

// export const SingleCountryLanguages = styled.div`
//   display: flex;
//   align-items: left;
//   padding: 10px;
// `;

export const SingleCountryBorderCountries = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  padding: 10px;
`;
