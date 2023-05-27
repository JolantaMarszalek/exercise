import { ButtonM } from "../Buttons/Buttons.styled";
import {
  BottomNavigationSection,
  BottomNavigationText,
} from "./BottomNavigation.styled";
import React from "react";

export const BottomNavigation = () => {
  return (
    <BottomNavigationSection>
      <BottomNavigationText>Boost your links today</BottomNavigationText>
      <ButtonM>Get Started</ButtonM>
    </BottomNavigationSection>
  );
};
