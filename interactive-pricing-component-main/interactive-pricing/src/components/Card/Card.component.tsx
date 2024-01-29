import { ChangeEvent, useState } from "react";
import {
  CardSectionBottom,
  CardSectionBottomLeft,
  CardSectionBottomLeftList,
  CardSectionBottomLeftListSingleLine,
  CardSectionBottomLeftListSingleLineDescribe,
  CardSectionBottomLeftListSingleLineImage,
  CardSectionBottomRight,
  CardSectionBottomRightButton,
  CardSectionMiddle,
  CardSectionMiddleLeft,
  CardSectionMiddleLeftToggle,
  CardSectionMiddleRight,
  CardSectionMiddleRightPrice,
  CardSectionMiddleText,
  CardSectionStyled,
  CardSectionToggle,
  CardSectionToggleInput,
  CardSectionToggleSlider,
  CardSectionToggleSwitch,
  CardSectionTop,
  CardSectionTopLeft,
  CardSectionTopLeftText,
  // CardSectionTopRight,
  CardSectionTopRightDesktop,
  CardSectionTopRightMedia,
  CardSectionTopRightPrice,
  CardSectionTopRightText,
  Slider,
  ToggleInput,
  ToggleSwitch,
} from "./Card.styled";

export const Card = () => {
  const [pageviews, setPageviews] = useState(100);
  const [price, setPrice] = useState(16);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);
  const [originalPrice, setOriginalPrice] = useState(16);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);

    if (value <= 20) {
      setPageviews(10);
      setPrice(8);
    } else if (value <= 40) {
      setPageviews(50);
      setPrice(12);
    } else if (value <= 60) {
      setPageviews(100);
      setPrice(16);
    } else if (value <= 80) {
      setPageviews(500);
      setPrice(24);
    } else {
      setPageviews(1000);
      setPrice(36);
    }
  };

  const handleBillingToggle = () => {
    setIsYearlyBilling((prev) => !prev);
    if (isYearlyBilling) {
      setPrice(originalPrice);
    } else {
      setOriginalPrice(price);
      setPrice((prevPrice) => prevPrice * 0.75);
    }
  };

  return (
    <>
      <CardSectionStyled>
        <CardSectionTop>
          <CardSectionTopLeft>
            <CardSectionTopLeftText>
              {pageviews}K Pageviews
            </CardSectionTopLeftText>
          </CardSectionTopLeft>
          <CardSectionTopRightDesktop>
            <CardSectionTopRightPrice>${price}.00</CardSectionTopRightPrice>
            <CardSectionTopRightText>/ month</CardSectionTopRightText>
          </CardSectionTopRightDesktop>
        </CardSectionTop>
        <CardSectionToggle>
          <CardSectionToggleSwitch>
            <CardSectionToggleInput
              type="range"
              onChange={handleSliderChange}
            />
            <CardSectionToggleSlider />
          </CardSectionToggleSwitch>
        </CardSectionToggle>
        <CardSectionTopRightMedia>
          <CardSectionTopRightPrice>${price}.00</CardSectionTopRightPrice>
          <CardSectionTopRightText>/ month</CardSectionTopRightText>
        </CardSectionTopRightMedia>
        <CardSectionMiddle>
          <CardSectionMiddleLeft>
            <CardSectionMiddleText>Monthly Billing</CardSectionMiddleText>
            <CardSectionMiddleLeftToggle>
              <ToggleSwitch>
                <ToggleInput type="checkbox" onChange={handleBillingToggle} />
                <Slider />
              </ToggleSwitch>
              {/* <span>
                {isYearlyBilling ? "Yearly Billing" : "Monthly Billing"}
              </span> */}
            </CardSectionMiddleLeftToggle>
          </CardSectionMiddleLeft>
          <CardSectionMiddleRight>
            <CardSectionMiddleText>Yearly Billing</CardSectionMiddleText>
            <CardSectionMiddleRightPrice>
              <span className="discount">25% discount</span>
              <span className="price">-25%</span>
            </CardSectionMiddleRightPrice>
          </CardSectionMiddleRight>
        </CardSectionMiddle>
        <CardSectionBottom>
          <CardSectionBottomLeft>
            <CardSectionBottomLeftList>
              <CardSectionBottomLeftListSingleLine>
                <CardSectionBottomLeftListSingleLineImage>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                    <path
                      fill="none"
                      stroke="#10D8C4"
                      strokeWidth="2"
                      d="M1 4.134l1.907 1.908L7.949 1"
                    />
                  </svg>
                </CardSectionBottomLeftListSingleLineImage>
                <CardSectionBottomLeftListSingleLineDescribe>
                  Unlimited websites
                </CardSectionBottomLeftListSingleLineDescribe>
              </CardSectionBottomLeftListSingleLine>{" "}
              <CardSectionBottomLeftListSingleLine>
                <CardSectionBottomLeftListSingleLineImage>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                    <path
                      fill="none"
                      stroke="#10D8C4"
                      strokeWidth="2"
                      d="M1 4.134l1.907 1.908L7.949 1"
                    />
                  </svg>
                </CardSectionBottomLeftListSingleLineImage>
                <CardSectionBottomLeftListSingleLineDescribe>
                  100% data ownership
                </CardSectionBottomLeftListSingleLineDescribe>
              </CardSectionBottomLeftListSingleLine>{" "}
              <CardSectionBottomLeftListSingleLine>
                <CardSectionBottomLeftListSingleLineImage>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                    <path
                      fill="none"
                      stroke="#10D8C4"
                      strokeWidth="2"
                      d="M1 4.134l1.907 1.908L7.949 1"
                    />
                  </svg>
                </CardSectionBottomLeftListSingleLineImage>
                <CardSectionBottomLeftListSingleLineDescribe>
                  Email reports
                </CardSectionBottomLeftListSingleLineDescribe>
              </CardSectionBottomLeftListSingleLine>
            </CardSectionBottomLeftList>
          </CardSectionBottomLeft>
          <CardSectionBottomRight>
            <CardSectionBottomRightButton>
              Start my trial
            </CardSectionBottomRightButton>
          </CardSectionBottomRight>
        </CardSectionBottom>
      </CardSectionStyled>
    </>
  );
};
