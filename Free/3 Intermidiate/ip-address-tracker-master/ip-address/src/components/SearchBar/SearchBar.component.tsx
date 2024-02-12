import {
  Button,
  InputField,
  InputLabel,
  SearchBarSection,
} from "./SearchBar.styled";

export const SearchBar = () => {
  return (
    <SearchBarSection>
      <InputLabel>
        <InputField placeholder="Search for any IP address or domain"></InputField>
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
          </svg>
        </Button>
      </InputLabel>
    </SearchBarSection>
  );
};
