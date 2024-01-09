import React from "react";
import {
  HeaderSectionButton,
  HeaderSectionLink,
} from "../Header/Header.styled";
import { Link } from "react-router-dom";
import {
  HeaderMobileButton,
  MobileMenuSection,
  MobileMenuSingleLink,
} from "./MobileMenu.styled";

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
              <MobileMenuSingleLink>
                <Link
                  to="not-found"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    //   borderTop: "2px solid white",
                  }}>
                  FEATURES
                </Link>
              </MobileMenuSingleLink>
              <MobileMenuSingleLink>
                <Link
                  to="not-found"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    //   borderTop: "2px solid white",
                  }}>
                  PRICING
                </Link>
              </MobileMenuSingleLink>
              <MobileMenuSingleLink>
                {" "}
                <Link
                  to="not-found"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    //   borderTop: "2px solid white",
                    //   borderBottom: "2px solid white",
                  }}>
                  CONTACT
                </Link>
              </MobileMenuSingleLink>
            </HeaderSectionLink>
            <HeaderSectionButton>
              <HeaderMobileButton>LOGIN</HeaderMobileButton>
            </HeaderSectionButton>
          </MobileMenuSection>
        </>
      )}
    </div>
  );
};
