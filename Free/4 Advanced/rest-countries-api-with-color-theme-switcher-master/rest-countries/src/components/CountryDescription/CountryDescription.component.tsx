import { Link } from "react-router-dom";
import {
  SingleCountryFlag,
  SingleCountryName,
  SingleCountryBorderCountries,
  SingleCountrySectionLeft,
  SingleCountrySectionRight,
  SingleCountry,
  SingleCountryDescriptions,
  SingleCountryDescriptionsSection,
} from "./CountryDescription.styled";
import { ButtonSmall } from "../ui/Button/Button.styled";

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
          <SingleCountryDescriptionsSection>
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
                {languages &&
                  languages.map((language) => <p>{language.name}</p>)}
              </p>
            </SingleCountryDescriptions>
          </SingleCountryDescriptionsSection>
          <SingleCountryBorderCountries>
            <p>
              <b>Border Countries: </b>
              <Link to="not-found">
                {borders &&
                  borders.map((border) => (
                    <ButtonSmall>
                      <p>{border}</p>
                    </ButtonSmall>
                  ))}
              </Link>
            </p>
          </SingleCountryBorderCountries>
        </SingleCountrySectionRight>
      </SingleCountry>
    </>
  );
};
