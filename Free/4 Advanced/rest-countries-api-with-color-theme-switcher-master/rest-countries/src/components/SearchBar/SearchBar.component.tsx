import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  SearchBarForm,
  SearchBarSection,
  SearchInput,
} from "./SearchBar.styled";

interface SearchBarProps {
  placeholder: string;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}
const SearchBar = ({ placeholder, query, setQuery }: SearchBarProps) => {
  return (
    <SearchBarForm>
      <SearchBarSection>
        <SearchInput
          placeholder={placeholder}
          value={query}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setQuery(event.target.value);
          }}
        />
      </SearchBarSection>
    </SearchBarForm>
  );
};

export default SearchBar;
