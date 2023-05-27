import React from "react";
import { BottomNavigation } from "../components/BottomNavigation/BottomNavigation.component";
import { TopNavigation } from "../components/TopNavigation/TopNavigation.component";
import { SearchBar } from "../components/SearchBar/SearchBar.component";

export const MainPage = () => {
  return (
    <>
      <TopNavigation />
      <SearchBar />
      <BottomNavigation />
    </>
  );
};
