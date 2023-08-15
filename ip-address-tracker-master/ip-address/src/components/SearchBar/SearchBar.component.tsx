import { InputField, InputLabel, SearchBarSection } from "./SearchBar.styled";

export const SearchBar = () => {
  return (
    <SearchBarSection>
      <InputLabel>
        <InputField placeholder="Search for ny IP address or domain"></InputField>
      </InputLabel>
    </SearchBarSection>
  );
};
