import React from "react";
import { Input } from "../Input/Input.component";
import { ButtonSquare } from "../Buttons/Buttons.styled";
import { SearchBarLeft, SearchBarSection } from "./SearchBar.styled";

export const SearchBar = () => {
  return (
    <>
      <SearchBarSection>
        <SearchBarLeft>
          <Input placeholder="Shorten a link here..." />
        </SearchBarLeft>
        <ButtonSquare>Shorten It!</ButtonSquare>
      </SearchBarSection>
    </>
  );
};
