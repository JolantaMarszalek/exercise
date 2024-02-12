// import { ReactNode } from "react";
import {
  SectionSecondTopMenu,
  SectionSecondTopMenuSingle,
  SectionSecondTopSection,
  SectionSecondTopSectionDescribe,
  SectionSecondTopSectionTitle,
} from "./SectionSecond.styled";
import { Link } from "react-router-dom";

// interface SectionFirstProps {
//   children: ReactNode;
// }

export const SectionSecond =
  // : React.FC<SectionFirstProps>
  () => {
    return (
      <>
        {" "}
        <SectionSecondTopSection>
          <SectionSecondTopSectionTitle>Features</SectionSecondTopSectionTitle>{" "}
          <SectionSecondTopSectionDescribe>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </SectionSecondTopSectionDescribe>
          <SectionSecondTopMenu>
            <Link
              // to="/"
              to="/simple-bookmarking"
              style={{ textDecoration: "none" }}>
              <SectionSecondTopMenuSingle>
                Simple Bookmarking
              </SectionSecondTopMenuSingle>
            </Link>
            <Link to="/speedy-searching" style={{ textDecoration: "none" }}>
              {" "}
              <SectionSecondTopMenuSingle>
                Speedy Searching
              </SectionSecondTopMenuSingle>
            </Link>
            <Link to="/easy-sharing" style={{ textDecoration: "none" }}>
              <SectionSecondTopMenuSingle>
                Easy Sharing
              </SectionSecondTopMenuSingle>
            </Link>
          </SectionSecondTopMenu>
        </SectionSecondTopSection>
      </>
    );
  };
