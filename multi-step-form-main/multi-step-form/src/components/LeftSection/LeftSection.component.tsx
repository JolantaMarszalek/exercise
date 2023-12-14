import { Link } from "react-router-dom";
import { useState } from "react";
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
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleClick = () => {
    setBackgroundColor("--primary-light-blue");
  };

  return (
    <>
      {/* <LeftSectionStyle> */}
      <LeftNavigationStyle>
        <LeftNavigationTextStyle>
          {" "}
          <Link to="/">
            <LeftTextSingleLine>
              <LeftTextSingleLineLeftSide>
                <LeftTextNumber
                  style={{ backgroundColor: backgroundColor }}
                  onClick={handleClick}>
                  1
                </LeftTextNumber>
              </LeftTextSingleLineLeftSide>
              <LeftTextSingleLineRightSide>
                <LeftTextFirstLine>STEP 1</LeftTextFirstLine>
                <LeftTextSecondLine>YOUR INFO</LeftTextSecondLine>
              </LeftTextSingleLineRightSide>
            </LeftTextSingleLine>{" "}
          </Link>
          <Link to="/selectPlan">
            <LeftTextSingleLine>
              <LeftTextSingleLineLeftSide>
                <LeftTextNumber>2</LeftTextNumber>
              </LeftTextSingleLineLeftSide>
              <LeftTextSingleLineRightSide>
                <LeftTextFirstLine>STEP 2</LeftTextFirstLine>
                <LeftTextSecondLine>SELECT PLAN</LeftTextSecondLine>
              </LeftTextSingleLineRightSide>
            </LeftTextSingleLine>{" "}
          </Link>
          <Link to="/addOns">
            <LeftTextSingleLine>
              <LeftTextSingleLineLeftSide>
                <LeftTextNumber>3</LeftTextNumber>
              </LeftTextSingleLineLeftSide>
              <LeftTextSingleLineRightSide>
                <LeftTextFirstLine>STEP 3</LeftTextFirstLine>
                <LeftTextSecondLine>ADD-ONS</LeftTextSecondLine>
              </LeftTextSingleLineRightSide>
            </LeftTextSingleLine>{" "}
          </Link>
          <Link to="/summary">
            <LeftTextSingleLine>
              <LeftTextSingleLineLeftSide>
                <LeftTextNumber>4</LeftTextNumber>
              </LeftTextSingleLineLeftSide>
              <LeftTextSingleLineRightSide>
                <LeftTextFirstLine>STEP 4</LeftTextFirstLine>
                <LeftTextSecondLine>SUMMARY</LeftTextSecondLine>
              </LeftTextSingleLineRightSide>
            </LeftTextSingleLine>{" "}
          </Link>
        </LeftNavigationTextStyle>
      </LeftNavigationStyle>
      {/* </LeftSectionStyle> */}
    </>
  );
};
