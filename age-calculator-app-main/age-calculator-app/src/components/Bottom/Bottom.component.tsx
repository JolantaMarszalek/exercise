import { useContext } from "react";
import { AgeContext, useAge } from "../Header/Header.component";
import {
  BottomSectionStyle,
  BottomSingleLine,
  BottomSingleLineNumber,
  BottomSingleLineText,
} from "./Bottom.styled";

// interface AgeProps {
//   years: number;
//   months: number;
//   days: number;
// }

export const Bottom: React.FC = () => {
  // const age = useAge();
  const age = useContext(AgeContext);
  if (!age) {
    return (
      <BottomSectionStyle>
        <BottomSingleLine>
          <BottomSingleLineNumber>- -</BottomSingleLineNumber>
          <BottomSingleLineText>years</BottomSingleLineText>
        </BottomSingleLine>
        <BottomSingleLine>
          <BottomSingleLineNumber>- -</BottomSingleLineNumber>
          <BottomSingleLineText>months</BottomSingleLineText>
        </BottomSingleLine>
        <BottomSingleLine>
          <BottomSingleLineNumber>- -</BottomSingleLineNumber>
          <BottomSingleLineText>days</BottomSingleLineText>
        </BottomSingleLine>
      </BottomSectionStyle>
    );
  }

  return (
    <BottomSectionStyle>
      <BottomSingleLine>
        <BottomSingleLineNumber>{age.years}</BottomSingleLineNumber>
        <BottomSingleLineText>years</BottomSingleLineText>
      </BottomSingleLine>
      <BottomSingleLine>
        <BottomSingleLineNumber>{age.months}</BottomSingleLineNumber>
        <BottomSingleLineText>months</BottomSingleLineText>
      </BottomSingleLine>
      <BottomSingleLine>
        <BottomSingleLineNumber>{age.days}</BottomSingleLineNumber>
        <BottomSingleLineText>days</BottomSingleLineText>
      </BottomSingleLine>
    </BottomSectionStyle>
  );
};
