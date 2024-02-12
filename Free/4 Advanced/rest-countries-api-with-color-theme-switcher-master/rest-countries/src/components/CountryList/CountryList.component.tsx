import { CountryGrid } from "./CountryList.styled";
import { SingleCard } from "../SingleCard/SingleCard.component";

export interface CountryProps {
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

interface CountryListProps {
  countries: CountryProps[];
}

const CountryList = ({ countries }: CountryListProps) => {
  return (
    <CountryGrid>
      {countries.map((country) => (
        <SingleCard key={country.name} country={country} />
      ))}
    </CountryGrid>
  );
};

export default CountryList;
