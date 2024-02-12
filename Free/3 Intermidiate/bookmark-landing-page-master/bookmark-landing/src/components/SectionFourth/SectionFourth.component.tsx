// import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  SectionFourthList,
  SectionFourthListSingleLine,
  SectionFourthListSingleLineAnswear,
  SectionFourthListSingleLineImage,
  SectionFourthListSingleLineQuestion,
  SectionFourthSectionButton,
  SectionFourthTopSection,
  SectionFourthTopSectionDescribe,
  SectionFourthTopSectionTitle,
} from "./SectionFourth.styled";
import { ButtonSmall } from "../Button/ButtonSmall.styled";
import { useState } from "react";

// interface SectionFirstProps {
//   children: ReactNode;
// }

export const SectionFourth =
  // : React.FC<SectionFirstProps>
  () => {
    const [expandedItem, setExpandedItem] = useState<number | null>(null);

    const handleToggle = (index: number) => {
      if (expandedItem === index) {
        setExpandedItem(null);
      } else {
        setExpandedItem(index);
      }
    };

    return (
      <>
        {" "}
        <SectionFourthTopSection>
          <SectionFourthTopSectionTitle>
            {" "}
            Frequently Asked Questions
          </SectionFourthTopSectionTitle>{" "}
          <SectionFourthTopSectionDescribe>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </SectionFourthTopSectionDescribe>
        </SectionFourthTopSection>{" "}
        <SectionFourthList>
          <SectionFourthListSingleLine onClick={() => handleToggle(1)}>
            {" "}
            <SectionFourthListSingleLineQuestion>
              What is Bookmark?
            </SectionFourthListSingleLineQuestion>
            {/* <SectionFourthListSingleLineAnswear></SectionFourthListSingleLineAnswear> */}
            <SectionFourthListSingleLineImage>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  fill="none"
                  stroke="#5267DF"
                  stroke-width="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </SectionFourthListSingleLineImage>
          </SectionFourthListSingleLine>{" "}
          {expandedItem === 1 && (
            <SectionFourthListSingleLineAnswear>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </SectionFourthListSingleLineAnswear>
          )}
          <SectionFourthListSingleLine onClick={() => handleToggle(2)}>
            {" "}
            <SectionFourthListSingleLineQuestion>
              How can I request a new browser?
            </SectionFourthListSingleLineQuestion>
            {/* <SectionFourthListSingleLineAnswear></SectionFourthListSingleLineAnswear> */}
            <SectionFourthListSingleLineImage>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  fill="none"
                  stroke="#5267DF"
                  stroke-width="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </SectionFourthListSingleLineImage>{" "}
          </SectionFourthListSingleLine>
          {expandedItem === 2 && (
            <SectionFourthListSingleLineAnswear>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </SectionFourthListSingleLineAnswear>
          )}
          <SectionFourthListSingleLine onClick={() => handleToggle(3)}>
            <SectionFourthListSingleLineQuestion>
              Is there a mobile app?
            </SectionFourthListSingleLineQuestion>
            {/* <SectionFourthListSingleLineAnswear></SectionFourthListSingleLineAnswear> */}
            <SectionFourthListSingleLineImage>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  fill="none"
                  stroke="#5267DF"
                  stroke-width="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </SectionFourthListSingleLineImage>
          </SectionFourthListSingleLine>
          {expandedItem === 3 && (
            <SectionFourthListSingleLineAnswear>
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </SectionFourthListSingleLineAnswear>
          )}
          <SectionFourthListSingleLine onClick={() => handleToggle(4)}>
            <SectionFourthListSingleLineQuestion>
              What about other Chromium browsers?
            </SectionFourthListSingleLineQuestion>
            {/* <SectionFourthListSingleLineAnswear></SectionFourthListSingleLineAnswear> */}
            <SectionFourthListSingleLineImage>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  fill="none"
                  stroke="#5267DF"
                  stroke-width="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </SectionFourthListSingleLineImage>
          </SectionFourthListSingleLine>
          {expandedItem === 4 && (
            <SectionFourthListSingleLineAnswear>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </SectionFourthListSingleLineAnswear>
          )}
        </SectionFourthList>
        <SectionFourthSectionButton>
          <Link to="not-found" style={{ textDecoration: "none" }}>
            <ButtonSmall type="submit">More Info</ButtonSmall>
          </Link>
        </SectionFourthSectionButton>
      </>
    );
  };
