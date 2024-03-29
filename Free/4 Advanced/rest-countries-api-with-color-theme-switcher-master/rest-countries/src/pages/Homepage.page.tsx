import { useEffect, useState } from "react";
import CountryList from "../components/CountryList/CountryList.component";
import SearchBar from "../components/SearchBar/SearchBar.component";

interface Data {
  url: string;
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
}

const Homepage: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCountry = async () => {
      fetch(
        `https://restcountries.com/v2/all?fields=name,capital,flag,population,region/`
      )
        .then((response) => response.json())
        .then((response) => setData((prevData) => [...prevData, ...response]));
      setIsLoading(false);
    };
    fetchCountry();
  }, [isLoading]);
  console.log(data);

  const filteredData = data.filter((country) => {
    return country.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <SearchBar
        query={query}
        setQuery={setQuery}
        placeholder="Search for a country..."
      />
      <CountryList countries={filteredData} />
    </>
  );
};

export default Homepage;
