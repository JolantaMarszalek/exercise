import { Link } from "react-router-dom";
import {
  SingleCountryFlag,
  SingleCountryName,
  // SingleCountryNativeName,
  // SingleCountryPopulation,
  // SingleCountryRegion,
  // SingleCountrySubRegion,
  // SingleCountryCapital,
  // SingleCountryTopLevelDomain,
  // SingleCountryCurrencies,
  // SingleCountryLanguages,
  SingleCountryBorderCountries,
  SingleCountrySectionLeft,
  SingleCountrySectionRight,
  SingleCountry,
  SingleCountryDescriptions,
} from "./CountryDescription.styled";
import { Button } from "../ui/Button/Button.styled";
// import { SingleCountryGrid } from "../SingleCountry/SingleCountry.styled";

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
      <SingleCountry>
        <SingleCountrySectionLeft>
          {" "}
          <SingleCountryFlag>
            <img src={flag} />
          </SingleCountryFlag>
        </SingleCountrySectionLeft>
        <SingleCountrySectionRight>
          <SingleCountryName>
            <p>
              <b>{name}</b>
            </p>
          </SingleCountryName>
          <SingleCountryDescriptions>
            <p>
              <b>Native Name: </b>
              {nativeName}
            </p>
          </SingleCountryDescriptions>
          <SingleCountryDescriptions>
            <p>
              <b>Population: </b>
              {population}
            </p>
          </SingleCountryDescriptions>
          <SingleCountryDescriptions>
            <p>
              <b>Region: </b>
              {region}
            </p>
          </SingleCountryDescriptions>
          <SingleCountryDescriptions>
            <p>
              <b>Sub Region: </b>
              {subregion}
            </p>
          </SingleCountryDescriptions>
          <SingleCountryDescriptions>
            <p>
              <b>Capital: </b>
              {capital}
            </p>
          </SingleCountryDescriptions>
          <SingleCountryDescriptions>
            <p>
              <b>Top Level Domain: </b>
              {topLevelDomain}
            </p>
          </SingleCountryDescriptions>
          <SingleCountryDescriptions>
            <p>
              <b>Currencies: </b>
              {currencies &&
                currencies.map((currency) => <p>{currency.name}</p>)}
            </p>
          </SingleCountryDescriptions>
          <SingleCountryDescriptions>
            <p>
              <b>Languages: </b>
              {languages && languages.map((language) => <p>{language.name}</p>)}
            </p>
          </SingleCountryDescriptions>
          <SingleCountryBorderCountries>
            <p>
              <b>Border Countries: </b>
              <Link to="not-found">
                {borders &&
                  borders.map((border) => (
                    <Button>
                      <p>{border}</p>
                    </Button>
                  ))}
              </Link>
            </p>
          </SingleCountryBorderCountries>
        </SingleCountrySectionRight>
      </SingleCountry>
    </>
  );
};
