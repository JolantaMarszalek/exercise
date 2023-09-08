import {
  SingleCountryFlag,
  SingleCountryName,
  SingleCountryNativeName,
  SingleCountryPopulation,
  SingleCountryRegion,
  SingleCountrySubRegion,
  SingleCountryCapital,
  SingleCountryTopLevelDomain,
  SingleCountryCurrencies,
  SingleCountryLanguages,
  SingleCountryBorderCountries,
} from "./CountryDescription.styled";
import { SingleCountryGrid } from "../SingleCountry/SingleCountry.styled";

export interface CountryDetails {
  name: string[];
}
export interface SingleCountryDescriptionProps {
  flag: string;
  name: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: CountryDetails[];
  languages: CountryDetails[];
  borders: string[];
}

export const SingleCountryDescription = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}: SingleCountryDescriptionProps) => {
  return (
    <>
      <SingleCountryGrid>
        <SingleCountryFlag>
          <img src={flag} />
        </SingleCountryFlag>
        <SingleCountryName>
          <p>
            <b>{name}</b>
          </p>
        </SingleCountryName>
        <SingleCountryNativeName>
          <p>
            <b>Native Name: </b>
            {nativeName}
          </p>
        </SingleCountryNativeName>
        <SingleCountryPopulation>
          <p>
            <b>Population: </b>
            {population}
          </p>
        </SingleCountryPopulation>
        <SingleCountryRegion>
          <p>
            <b>Region: </b>
            {region}
          </p>
        </SingleCountryRegion>
        <SingleCountrySubRegion>
          <p>
            <b>Sub Region: </b>
            {subregion}
          </p>
        </SingleCountrySubRegion>
        <SingleCountryCapital>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </SingleCountryCapital>
        <SingleCountryTopLevelDomain>
          <p>
            <b>Top Level Domain: </b>
            {topLevelDomain}
          </p>
        </SingleCountryTopLevelDomain>
        <SingleCountryCurrencies>
          <p>
            <b>Currencies: </b>
            {currencies && currencies.map((currency) => <p>{currency.name}</p>)}
          </p>
        </SingleCountryCurrencies>
        <SingleCountryLanguages>
          <p>
            <b>Languages: </b>
            {languages && languages.map((language) => <p>{language.name}</p>)}
          </p>
        </SingleCountryLanguages>
        <SingleCountryBorderCountries>
          <p>
            <b>Border Countries: </b>
            {borders && borders.map((border) => <p>{border}</p>)}
          </p>
        </SingleCountryBorderCountries>
      </SingleCountryGrid>
    </>
  );
};
