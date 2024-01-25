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
  CardSectionStyled,
  CardSectionToggle,
  CardSectionTop,
  CardSectionTopLeft,
} from "./Card.styled";

export const Card = () => {
  return (
    <>
      <CardSectionStyled>
        <CardSectionTop>
          <CardSectionTopLeft>Pageviews</CardSectionTopLeft>
          <CardSectionBottomRight>$ /month</CardSectionBottomRight>
        </CardSectionTop>
        <CardSectionToggle></CardSectionToggle>
        <CardSectionMiddle></CardSectionMiddle>
        <CardSectionBottom>
          <CardSectionBottomLeft>
            <CardSectionBottomLeftList>
              <CardSectionBottomLeftListSingleLine>
                <CardSectionBottomLeftListSingleLineImage>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                    <path
                      fill="none"
                      stroke="#10D8C4"
                      stroke-width="2"
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
                      stroke-width="2"
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
                      stroke-width="2"
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
              <button>Start my trial</button>
            </CardSectionBottomRightButton>
          </CardSectionBottomRight>
        </CardSectionBottom>
      </CardSectionStyled>
    </>
  );
};
