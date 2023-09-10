import {
  SingleCountryDescription,
  SingleCountryDescriptionProps,
} from "../CountryDescription/CountryDescription.component";
import { SingleCountryGrid } from "./SingleCountry.styled";

interface SingleCountryProps {
  country: SingleCountryDescriptionProps;
}

const SingleCountry = ({ country }: SingleCountryProps) => {
  return (
    <SingleCountryGrid>
      <SingleCountryDescription
        flag={country.flag}
        name={country.name}
        nativeName={country.nativeName}
        population={country.population}
        region={country.region}
        subregion={country.subregion}
        capital={country.capital}
        topLevelDomain={country.topLevelDomain}
        currencies={country.currencies}
        languages={country.languages}
        borders={country.borders}
      />
    </SingleCountryGrid>
  );
};

export default SingleCountry;
