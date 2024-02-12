import React from "react";
import { BottomNavigation } from "../components/BottomNavigation/BottomNavigation.component";
import { TopNavigation } from "../components/TopNavigation/TopNavigation.component";
import { MiddleSection } from "../components/MiddleSection/MiddleSection.component";
import { SearchBar } from "../components/SearchBar/SearchBar.component";

export const MainPage = () => {
  return (
    <>
      <TopNavigation />
      <SearchBar />
      <MiddleSection />
      <BottomNavigation />
    </>
  );
};
