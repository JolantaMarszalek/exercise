import React from "react";
import { BottomNavigation } from "../components/BottomNavigation/BottomNavigation.component";
import { TopNavigation } from "../components/TopNavigation/TopNavigation.component";
import { Input } from "../components/Input/Input.component";

export const MainPage = () => {
  return (
    <>
      <TopNavigation />
      <Input placeholder="Shorten a link here..." />
      <BottomNavigation />
    </>
  );
};
