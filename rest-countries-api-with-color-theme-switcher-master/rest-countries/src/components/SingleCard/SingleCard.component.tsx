import { Link } from "react-router-dom";
import { CountryProps } from "../CountryList/CountryList.component";
import {
  CountryCard,
  CountryDescribe,
  CountryFlag,
  CountryName,
} from "./SingleCard.styled";

interface SingleCardProps {
  country: CountryProps;
}

export const SingleCard = ({ country }: SingleCardProps) => {
  return (
    <CountryCard>
      <Link
        to={`country/${country.name}`}
        style={{ textDecoration: "none", color: "inherit" }}>
        <CountryFlag>
          <img src={country.flag} />
        </CountryFlag>
        <CountryDescribe>
          <CountryName>
            <p>
              <b></b>
              {country.name}
            </p>
          </CountryName>
          <p>
            <b>Population:</b> {country.population}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Capital:</b> {country.capital}
          </p>
        </CountryDescribe>
      </Link>
    </CountryCard>
  );
};
