import { Link } from "react-router-dom";
import { CountryProps } from "../CountryList/CountryList.component";
import {
  CountryCard,
  CountryFlag,
  // CountryName,
  // CountryPopulation,
  // CountryRegion,
  // CountryCapital,
} from "./SingleCard.styled";

interface SingleCardProps {
  country: CountryProps;
}

export const SingleCard = ({ country }: SingleCardProps) => {
  return (
    <CountryCard>
      <CountryFlag>
        <img src={country.flag} />
      </CountryFlag>
      <Link to={`country/${country.name}`}>
        {/* <CountryName> */}
        <p>
          <b></b>
          {country.name}
        </p>
        {/* </CountryName> */}
      </Link>
      {/* <CountryPopulation> */}
      <p>
        <b>Population:</b> {country.population}
      </p>
      {/* </CountryPopulation> */}
      {/* <CountryRegion> */}
      <p>
        <b>Region:</b> {country.region}
      </p>
      {/* </CountryRegion> */}
      {/* <CountryCapital> */}
      <p>
        <b>Capital:</b> {country.capital}
      </p>
      {/* </CountryCapital> */}
    </CountryCard>
  );
};
