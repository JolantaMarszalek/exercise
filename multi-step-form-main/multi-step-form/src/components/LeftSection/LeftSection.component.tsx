import {
  LeftNavigationStyle,
  LeftNavigationTextStyle,
  LeftSectionStyle,
  LeftTextFirstLine,
  LeftTextNumber,
  LeftTextSecondLine,
  LeftTextSingleLine,
  LeftTextSingleLineLeftSide,
  LeftTextSingleLineRightSide,
} from "./LeftSection.styled";

export const LeftSection = () => {
  return (
    <>
      <LeftSectionStyle>
        <LeftNavigationStyle>
          <LeftNavigationTextStyle>
            <LeftTextSingleLine>
              <LeftTextSingleLineLeftSide>
                <LeftTextNumber>1</LeftTextNumber>
              </LeftTextSingleLineLeftSide>
              <LeftTextSingleLineRightSide>
                <LeftTextFirstLine>STEP 1</LeftTextFirstLine>
                <LeftTextSecondLine>YOUR INFO</LeftTextSecondLine>
              </LeftTextSingleLineRightSide>
            </LeftTextSingleLine>
          </LeftNavigationTextStyle>
        </LeftNavigationStyle>
      </LeftSectionStyle>
    </>
  );
};
