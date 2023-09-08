import { DependencyList, EffectCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  SingleCountryDescription,
  CountryDetails,
} from "../components/CountryDescription/CountryDescription.component";
import Toggle from "../components/Toggle/Toggle.component";
import { Button } from "../components/ui/Button/Button.styled";
import { Input } from "../components/ui/Input/Input.component";
import { useData } from "../context/country.context";

interface Data {
  url: string;
  name: string;
  flag: string;
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

const CountryPage: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const params = useParams();

  useEffect(() => {
    const fetchSingleCountry = async () => {
      fetch(
        `https://restcountries.com/v2/name/${params.country}?fields=name,nativeName,capital,region,subregion,borders,flag,population,topLevelDomain,currencies,languages&fullText=true`
      )
        .then((response) => response.json())
        .then((response) => setData((prevData) => [...prevData, ...response]))

        .catch((error) => console.log(error));
    };
    fetchSingleCountry();
  }, []);
  console.log("Data:", data);

  const country =
    data && data.find((singleCountry) => singleCountry.name === params.country);

  return (
    <>
      <Link to="/">
        <Button>Back</Button>
      </Link>
      {country && (
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
      )}
    </>
  );
};

export default CountryPage;
