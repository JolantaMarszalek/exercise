import {
  BottomSectionStyle,
  BottomSingleLine,
  BottomSingleLineNumber,
  BottomSingleLineText,
} from "./Bottom.styled";

export const Bottom = () => {
  return (
    <BottomSectionStyle>
      <BottomSingleLine>
        <BottomSingleLineNumber>38</BottomSingleLineNumber>
        <BottomSingleLineText>years</BottomSingleLineText>
      </BottomSingleLine>
      <BottomSingleLine>
        <BottomSingleLineNumber>3</BottomSingleLineNumber>
        <BottomSingleLineText>months</BottomSingleLineText>
      </BottomSingleLine>
      <BottomSingleLine>
        <BottomSingleLineNumber>26</BottomSingleLineNumber>
        <BottomSingleLineText>days</BottomSingleLineText>
      </BottomSingleLine>
    </BottomSectionStyle>
  );
};
