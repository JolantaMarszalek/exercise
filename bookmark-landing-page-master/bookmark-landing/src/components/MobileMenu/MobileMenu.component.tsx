import React from "react";
import {
  HeaderSectionButton,
  HeaderSectionLink,
} from "../Header/Header.styled";
import { Link } from "react-router-dom";
import { ButtonRed } from "../Button/ButtonRed.styled";
import { MobileMenuSection } from "./MobileMenu.styled";

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <div
      style={
        {
          /* dodaj odpowiednie style dla rozwijanego menu */
        }
      }>
      {isOpen && (
        <>
          <MobileMenuSection>
            <HeaderSectionLink>
              <Link
                to="not-found"
                style={{ textDecoration: "none", color: "inherit" }}>
                FEATURES
              </Link>
              <Link
                to="not-found"
                style={{ textDecoration: "none", color: "inherit" }}>
                PRICING
              </Link>
              <Link
                to="not-found"
                style={{ textDecoration: "none", color: "inherit" }}>
                CONTACT
              </Link>
            </HeaderSectionLink>
            <HeaderSectionButton>
              <ButtonRed type="submit">LOGIN</ButtonRed>
            </HeaderSectionButton>
          </MobileMenuSection>
        </>
      )}
    </div>
  );
};
