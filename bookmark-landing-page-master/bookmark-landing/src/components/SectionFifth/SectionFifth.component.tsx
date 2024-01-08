// import { ReactNode } from "react";
import { ButtonRed } from "../Button/ButtonRed.styled";
import {
  InputField,
  InputLabel,
  SectionFifthSection,
  SectionFifthSectionButton,
  SectionFifthSectionInput,
  SectionFifthTopSection,
  SectionFifthTopSectionDescribe,
  SectionFifthTopSectionTitle,
} from "./SectionFifth.styled";
import { Link } from "react-router-dom";

// interface SectionFirstProps {
//   children: ReactNode;
// }

export const SectionFifth =
  // : React.FC<SectionFirstProps>
  () => {
    return (
      <>
        {" "}
        <SectionFifthTopSection>
          <SectionFifthTopSectionDescribe>
            35,000+ already joined
          </SectionFifthTopSectionDescribe>
          <SectionFifthTopSectionTitle>
            Stay up-to-date with what we’re doing
          </SectionFifthTopSectionTitle>{" "}
        </SectionFifthTopSection>
        <SectionFifthSection>
          <SectionFifthSectionInput>
            <InputLabel>
              <InputField placeholder="Enter your email address"></InputField>
            </InputLabel>
          </SectionFifthSectionInput>{" "}
          <SectionFifthSectionButton>
            {" "}
            <Link to="not-found" style={{ textDecoration: "none" }}>
              <ButtonRed type="submit">Contact Us</ButtonRed>{" "}
            </Link>
          </SectionFifthSectionButton>
        </SectionFifthSection>
      </>
    );
  };
