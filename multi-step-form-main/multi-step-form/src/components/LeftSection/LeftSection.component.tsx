import { Link } from "react-router-dom";
import {
  LeftNavigationStyle,
  LeftNavigationTextStyle,
  //   LeftSectionStyle,
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
      {/* <LeftSectionStyle> */}
      <LeftNavigationStyle>
        <LeftNavigationTextStyle>
          {" "}
          <Link to="/">
            <LeftTextSingleLine>
              <LeftTextSingleLineLeftSide>
                <LeftTextNumber>1</LeftTextNumber>
              </LeftTextSingleLineLeftSide>
              <LeftTextSingleLineRightSide>
                <LeftTextFirstLine>STEP 1</LeftTextFirstLine>
                <LeftTextSecondLine>YOUR INFO</LeftTextSecondLine>
              </LeftTextSingleLineRightSide>
            </LeftTextSingleLine>{" "}
          </Link>
          <LeftTextSingleLine>
            <LeftTextSingleLineLeftSide>
              <LeftTextNumber>2</LeftTextNumber>
            </LeftTextSingleLineLeftSide>
            <LeftTextSingleLineRightSide>
              <LeftTextFirstLine>STEP 2</LeftTextFirstLine>
              <LeftTextSecondLine>SELECT PLAN</LeftTextSecondLine>
            </LeftTextSingleLineRightSide>
          </LeftTextSingleLine>
          <LeftTextSingleLine>
            <LeftTextSingleLineLeftSide>
              <LeftTextNumber>3</LeftTextNumber>
            </LeftTextSingleLineLeftSide>
            <LeftTextSingleLineRightSide>
              <LeftTextFirstLine>STEP 3</LeftTextFirstLine>
              <LeftTextSecondLine>ADD-ONS</LeftTextSecondLine>
            </LeftTextSingleLineRightSide>
          </LeftTextSingleLine>
          <LeftTextSingleLine>
            <LeftTextSingleLineLeftSide>
              <LeftTextNumber>4</LeftTextNumber>
            </LeftTextSingleLineLeftSide>
            <LeftTextSingleLineRightSide>
              <LeftTextFirstLine>STEP 4</LeftTextFirstLine>
              <LeftTextSecondLine>SUMMARY</LeftTextSecondLine>
            </LeftTextSingleLineRightSide>
          </LeftTextSingleLine>
        </LeftNavigationTextStyle>
      </LeftNavigationStyle>
      {/* </LeftSectionStyle> */}
    </>
  );
};
