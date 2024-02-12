import { ReactNode } from "react";
import { LayoutSectionStyled } from "./Layout.styled";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutSectionStyled>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="449">
          <path
            fill="#F1F5FE"
            fill-rule="evenodd"
            d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"
          />
        </svg>{" "} */}
        {children}
      </LayoutSectionStyled>
    </>
  );
};
