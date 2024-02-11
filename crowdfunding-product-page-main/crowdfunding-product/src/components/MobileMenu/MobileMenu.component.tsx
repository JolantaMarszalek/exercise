import React from "react";

import {
  CardMobileSectionButton,
  CloseButton,
  HeaderSectionLink,
  MobileMenuSection,
  MobileMenuSingleLink,
  MobileMenuSingleMiddleLink,
} from "./MobileMenu.styled";

interface MobileMenuProps {
  isOpen: boolean;
  setIsCardMobileOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  setIsCardMobileOpen,
}) => {
  const closeLightbox = () => {
    if (setIsCardMobileOpen) {
      setIsCardMobileOpen(false);
    }
  };
  return (
    <div>
      {isOpen && (
        <>
          <MobileMenuSection>
            <CardMobileSectionButton>
              <CloseButton onClick={closeLightbox}>x</CloseButton>
            </CardMobileSectionButton>
            <HeaderSectionLink>
              <MobileMenuSingleLink>About</MobileMenuSingleLink>
              <MobileMenuSingleMiddleLink>Discover</MobileMenuSingleMiddleLink>
              <MobileMenuSingleLink>Get Started</MobileMenuSingleLink>
            </HeaderSectionLink>
          </MobileMenuSection>
        </>
      )}
    </div>
  );
};
