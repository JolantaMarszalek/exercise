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
// import mySvgBackground from "../../../../images/bg-sidebar-desktop.svg";
import { useMediaQuery } from "react-responsive";

export const LeftSection = () => {
  const [numbers, setNumbers] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  // const leftSectionStyle = {
  //   background: `url(${mySvgBackground}) no-repeat center center fixed`,
  // };
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const handleClick = (num: number) => {
    setNumbers((prevNumbers) => ({
      ...prevNumbers,
      [num]: !prevNumbers[num as keyof typeof prevNumbers],
    }));
  };

  return (
    <>
      {/* <LeftSectionStyle> */}
      <LeftNavigationStyle
      // style={leftSectionStyle}
      >
        <LeftNavigationTextStyle>
          {" "}
          <Link to="/">
            <LeftTextSingleLine>
              <LeftTextSingleLineLeftSide>
                <LeftTextNumber
                  clicked={numbers[1]}
                  onClick={() => handleClick(1)}>
                  1
                </LeftTextNumber>
              </LeftTextSingleLineLeftSide>
              <LeftTextSingleLineRightSide
                className={isMobile ? "hide-on-mobile" : ""}>
                <LeftTextFirstLine>STEP 1</LeftTextFirstLine>
                <LeftTextSecondLine>YOUR INFO</LeftTextSecondLine>
              </LeftTextSingleLineRightSide>
            </LeftTextSingleLine>{" "}
          </Link>
          <Link to="/selectPlan">
            <LeftTextSingleLine>
              <LeftTextSingleLineLeftSide>
                <LeftTextNumber
                  clicked={numbers[2]}
                  onClick={() => handleClick(2)}>
                  2
                </LeftTextNumber>
              </LeftTextSingleLineLeftSide>
              <LeftTextSingleLineRightSide
                className={isMobile ? "hide-on-mobile" : ""}>
                <LeftTextFirstLine>STEP 2</LeftTextFirstLine>
                <LeftTextSecondLine>SELECT PLAN</LeftTextSecondLine>
              </LeftTextSingleLineRightSide>
            </LeftTextSingleLine>{" "}
          </Link>
          <Link to="/addOns">
            <LeftTextSingleLine>
              <LeftTextSingleLineLeftSide>
                <LeftTextNumber
                  clicked={numbers[3]}
                  onClick={() => handleClick(3)}>
                  3
                </LeftTextNumber>
              </LeftTextSingleLineLeftSide>
              <LeftTextSingleLineRightSide
                className={isMobile ? "hide-on-mobile" : ""}>
                <LeftTextFirstLine>STEP 3</LeftTextFirstLine>
                <LeftTextSecondLine>ADD-ONS</LeftTextSecondLine>
              </LeftTextSingleLineRightSide>
            </LeftTextSingleLine>{" "}
          </Link>
          <Link to="/summary">
            <LeftTextSingleLine>
              <LeftTextSingleLineLeftSide>
                <LeftTextNumber
                  clicked={numbers[4]}
                  onClick={() => handleClick(4)}>
                  4
                </LeftTextNumber>
              </LeftTextSingleLineLeftSide>
              <LeftTextSingleLineRightSide
                className={isMobile ? "hide-on-mobile" : ""}>
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
